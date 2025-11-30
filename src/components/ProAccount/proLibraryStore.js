// src/lib/proLibraryStore.js

const STORAGE_KEY = "euskalia_pro_library_docs";

// Leer todo lo guardado
export function loadLibraryDocs() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Guardar el array completo
export function saveLibraryDocs(docs) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(docs));
  } catch {
    // ignoramos errores de cuota, modo incógnito, etc.
  }
}

// Añadir un nuevo documento (traductor / resumen)
export function addLibraryDoc({ kind, title, content }) {
  const docs = loadLibraryDocs();
  const now = new Date();

  const newDoc = {
    id: crypto.randomUUID?.() || String(now.getTime()),
    kind, // "translator" | "summary"
    title,
    content,
    createdAt: now.toISOString(),
  };

  const updated = [newDoc, ...docs];
  saveLibraryDocs(updated);
  return newDoc;
}

// Leer un documento concreto (lo usaremos más adelante para la página de detalle)
export function getLibraryDocById(id) {
  return loadLibraryDocs().find((d) => d.id === id) || null;
}
