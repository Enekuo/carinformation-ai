import { useSyncExternalStore } from "react";

const STORAGE_KEY = "euskalia_pro_folders";

// ===== Estado interno =====
let folders = loadInitialFolders();
const listeners = new Set();

function loadInitialFolders() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(folders));
  } catch {
    // ignoramos errores de storage
  }
}

function emit() {
  persist();
  for (const l of listeners) l();
}

function makeId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return String(Date.now() + Math.random());
}

function formatDateLabel(dateIso) {
  try {
    return new Date(dateIso)
      .toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(".", "");
  } catch {
    return "";
  }
}

// ===== API escritura =====
export function addLibraryFolder({ name, docIds }) {
  const id = makeId();
  const createdAt = new Date().toISOString();
  const createdAtLabel = formatDateLabel(createdAt);

  const folder = {
    id,
    name: String(name || "").trim(),
    createdAt,
    createdAtLabel,
    docIds: Array.isArray(docIds) ? docIds : [],
  };

  folders = [folder, ...folders];
  emit();
  return id;
}

export function deleteFolder(id) {
  folders = folders.filter((f) => f.id !== id);
  emit();
}

export function renameFolder(id, newName) {
  const name = String(newName || "").trim();
  if (!name) return;
  folders = folders.map((f) =>
    f.id === id
      ? {
          ...f,
          name,
        }
      : f
  );
  emit();
}

export function updateFolderDocs(id, docIds) {
  folders = folders.map((f) =>
    f.id === id
      ? {
          ...f,
          docIds: Array.isArray(docIds) ? docIds : [],
        }
      : f
  );
  emit();
}

// ===== Hook lectura =====
export function useLibraryFolders() {
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const getSnapshot = () => folders;

  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return {
    folders: snapshot,
    deleteFolder,
    renameFolder,
    updateFolderDocs,
  };
}
