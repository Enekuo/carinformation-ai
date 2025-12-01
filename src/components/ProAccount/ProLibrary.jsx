import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Folder, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { useLibraryDocs } from "@/proLibraryStore";

export default function ProLibrary() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const navigate = useNavigate();

  // ===== STORE BIBLIOTECA (traducciones / resúmenes) =====
  const { docs, renameDoc, deleteDoc } = useLibraryDocs();

  // ===== Filtros (all | text | summary | folders) =====
  const [type, setType] = useState("all");

  const createAction = useMemo(() => {
    switch (type) {
      case "text":
        return {
          label: tr("library_create_text", "Crear texto"),
          href: "/cuenta-pro/traductor",
        };
      case "summary":
        return {
          label: tr("library_create_summary", "Crear resumen"),
          href: "/cuenta-pro/resumen",
        };
      case "folders":
        return {
          label: tr("library_create_folder", "Crear carpeta"),
          href: "#",
        };
      case "all":
      default:
        return {
          label: tr("library_create_new", "Crear nuevo"),
          href: "/cuenta-pro/traductor",
        };
    }
  }, [type, tr]);

  // ===== Menú contextual por documento =====
  const [menuOpenFor, setMenuOpenFor] = useState(null); // id
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!menuOpenFor) return;
      if (menuRef.current?.contains(e.target)) return;
      if (menuBtnRef.current?.contains(e.target)) return;
      setMenuOpenFor(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuOpenFor]);

  // ===== Modal editar título =====
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editingDocId, setEditingDocId] = useState(null);

  const openEditModal = (doc) => {
    setEditingDocId(doc.id);
    setEditTitle(doc.title || "");
    setEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditingDocId(null);
    setEditTitle("");
  };
  const saveEditTitle = () => {
    const title = editTitle.trim();
    if (!title || !editingDocId) return;
    renameDoc(editingDocId, title);
    closeEditModal();
  };

  const handleDeleteDoc = (docId) => {
    deleteDoc(docId);
    setMenuOpenFor(null);
  };

  // ===== Carpetas (solo local, no store) =====
  const [isFolderModalOpen, setFolderModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);
  const [selectedDocIds, setSelectedDocIds] = useState([]);
  const [openFolderId, setOpenFolderId] = useState(null);

  const openFolderModal = () => {
    setFolderName("");
    setSelectedDocIds([]);
    setFolderModalOpen(true);
  };
  const closeFolderModal = () => setFolderModalOpen(false);

  const toggleSelectedDoc = (id) => {
    setSelectedDocIds((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const saveFolder = () => {
    const name = folderName.trim();
    if (!name) return;
    setFolders((prev) => [
      {
        id: crypto.randomUUID?.() || String(Date.now()),
        name,
        createdAt: new Date().toISOString(),
        docIds: selectedDocIds.slice(),
      },
      ...prev,
    ]);
    setFolderModalOpen(false);
  };

  // ========= Helpers visuales =========
  const getDocVisual = (doc) => {
    const kind = doc.kind === "translation" ? "translation" : "summary";

    if (kind === "translation") {
      return {
        bg: "#EAF3FF",
        border: "#D9E7FF",
        iconSrc: "/Library1.png",
        labelPrefix: tr("library_prefix_translation", "Itzulpena:"),
      };
    }
    return {
      bg: "#F9F6E9",
      border: "#EFE5C7",
      iconSrc: "/Library2.jpg",
      labelPrefix: tr("library_prefix_summary", "Laburpena:"),
    };
  };

  const formatDateLabel = (doc) => {
    if (doc.createdAtLabel) return doc.createdAtLabel;
    if (doc.createdAt) {
      try {
        return new Date(doc.createdAt)
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
    return "";
  };

  // ===== Render =====
  return (
    <>
      <section className="w-full bg-[#F4F8FF] pt-4 pb-16">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-8">
            {/* Filtros arriba */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                {[
                  {
                    id: "all",
                    label: tr("library_filter_all", "Todos"),
                  },
                  {
                    id: "text",
                    label: tr("library_filter_texts", "Textos"),
                  },
                  {
                    id: "summary",
                    label: tr("library_filter_summaries", "Resúmenes"),
                  },
                  {
                    id: "folders",
                    label: tr("library_filter_folders", "Mis carpetas"),
                  },
                ].map(({ id, label }) => {
                  const active = type === id;

                  const btnBase =
                    "group relative overflow-hidden rounded-full text-sm px-4 py-2 transition-colors duration-150 hover:shadow-sm";
                  const textCls = active
                    ? "relative z-10 text-[#1A73E8]"
                    : "relative z-10 text-slate-700 group-hover:text-slate-900";
                  const bgBase =
                    "absolute inset-0 rounded-full scale-100 transition-transform duration-150 will-change-transform";
                  const bgCls = active
                    ? `${bgBase} bg-[#E8F0FE] group-hover:scale-[1.08] group-hover:bg-[#E3EEFF]`
                    : `${bgBase} bg-transparent group-hover:bg-[#F5F7FA] group-hover:scale-[1.08]`;

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setType(id)}
                      className={btnBase}
                      aria-pressed={active}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <span className={bgCls} aria-hidden="true" />
                      <span className={textCls}>{label}</span>
                    </button>
                  );
                })}
              </div>

              {type === "folders" && (
                <button
                  onClick={openFolderModal}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium
                             bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  {tr("library_create_folder", "Crear carpeta")}
                </button>
              )}
            </div>

            {/* Contenedor de tarjetas */}
            <div
              className={
                type === "folders"
                  ? "flex flex-col gap-4"
                  : "flex flex-wrap gap-[38px]"
              }
            >
              {/* Crear nuevo */}
              {type !== "folders" && (
                <Link
                  to={createAction.href}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
                  style={{ width: 280, height: 196, borderRadius: 16 }}
                  role="button"
                >
                  <div className="h-full w-full flex flex-col items-center justify-center">
                    <div
                      className="flex items-center justify-center rounded-full bg-indigo-50"
                      style={{ width: 70, height: 70 }}
                    >
                      <Plus
                        className="text-indigo-600"
                        style={{ width: 21, height: 21 }}
                      />
                    </div>
                    <span className="mt-4 text-[20px] leading-6 text-slate-900">
                      {createAction.label}
                    </span>
                  </div>
                </Link>
              )}

              {/* Tarjetas documento (traducciones / resúmenes) */}
              {(type === "all" || type === "text" || type === "summary") &&
                docs
                  .filter((doc) => {
                    if (type === "text") return doc.kind === "translation";
                    if (type === "summary") return doc.kind === "summary";
                    return true;
                  })
                  .map((doc) => {
                    const { bg, border, iconSrc, labelPrefix } =
                      getDocVisual(doc);
                    const dateLabel = formatDateLabel(doc);

                    return (
                      <div
                        key={doc.id}
                        className="relative shadow-sm hover:shadow-md transition cursor-pointer"
                        style={{
                          width: 280,
                          height: 196,
                          borderRadius: 16,
                          backgroundColor: bg,
                          border: `1px solid ${border}`,
                        }}
                        onClick={() =>
                          navigate(`/cuenta-pro/biblioteca/${doc.id}`)
                        }
                      >
                        {/* Menú (3 puntos) */}
                        <button
                          ref={menuBtnRef}
                          aria-label="Opciones"
                          className="absolute top-3 right-3 h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-white/60"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpenFor((prev) =>
                              prev === doc.id ? null : doc.id
                            );
                          }}
                          type="button"
                        >
                          <MoreVertical className="w-5 h-5 text-slate-600" />
                        </button>

                        {menuOpenFor === doc.id && (
                          <div
                            ref={menuRef}
                            className="absolute z-10 top-1/2 -translate-y-1/2 left-[calc(100%-100px)] w-[220px] rounded-xl border border-slate-200 bg-white shadow-lg py-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              className="w-full flex items-center gap-3 px-3 py-2 text-slate-800 hover:bg-slate-50"
                              onClick={() => {
                                openEditModal(doc);
                              }}
                            >
                              <Pencil className="w-5 h-5 text-slate-600" />
                              <span>
                                {tr(
                                  "library_doc_edit_title",
                                  "Editar título"
                                )}
                              </span>
                            </button>
                            <button
                              className="w-full flex items-center gap-3 px-3 py-2 text-slate-800 hover:bg-slate-50"
                              onClick={() => handleDeleteDoc(doc.id)}
                            >
                              <Trash2 className="w-5 h-5 text-slate-600" />
                              <span>
                                {tr("library_doc_delete", "Eliminar documento")}
                              </span>
                            </button>
                          </div>
                        )}

                        {/* Contenido tarjeta */}
                        <div className="h-full w-full px-5 pt-8 pb-6 flex flex-col">
                          <img
                            src={iconSrc}
                            alt=""
                            width={40}
                            height={40}
                            className="block select-none"
                          />

                          {/* Título: prefijo en negrita + resto gris */}
                          <h3
                            className="mt-6 text-[18px] leading-[24px] pr-4"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            <span className="font-semibold text-slate-900">
                              {labelPrefix}
                            </span>{" "}
                            <span className="font-normal text-slate-700">
                              {doc.title ||
                                tr("library_untitled", "Sin título")}
                            </span>
                          </h3>

                          {/* Fecha SIEMPRE abajo */}
                          {dateLabel && (
                            <p className="mt-auto text-[14px] leading-[20px] text-slate-700">
                              {dateLabel}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}

              {/* Carpetas */}
              {type === "folders" && folders.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-300 p-6 text-slate-500">
                  {tr(
                    "library_no_folders",
                    "Aún no tienes carpetas. Crea la primera."
                  )}
                </div>
              )}
              {type === "folders" &&
                folders.map((f) => {
                  const isOpen = openFolderId === f.id;
                  const docsInFolder = docs.filter((d) =>
                    (f.docIds || []).includes(d.id)
                  );
                  return (
                    <div key={f.id} className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFolderId((prev) =>
                            prev === f.id ? null : f.id
                          )
                        }
                        className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center justify-between hover:bg-slate-50 transition"
                        style={{ width: 280 }}
                      >
                        <div className="flex items-center gap-2 text-slate-700">
                          <Folder className="w-5 h-5 text-sky-500" />
                          <span className="font-medium truncate">
                            {f.name}
                          </span>
                        </div>
                        <p className="ml-4 text-xs text-slate-500">
                          {new Date(f.createdAt).toLocaleString()}
                        </p>
                      </button>

                      {isOpen && docsInFolder.length > 0 && (
                        <div className="ml-6 mt-1 flex flex-col gap-2">
                          {docsInFolder.map((doc) => {
                            const { labelPrefix } = getDocVisual(doc);
                            const dateLabel = formatDateLabel(doc);
                            return (
                              <button
                                key={doc.id}
                                type="button"
                                onClick={() =>
                                  navigate(
                                    `/cuenta-pro/biblioteca/${doc.id}`
                                  )
                                }
                                className="w-[260px] text-left rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm hover:bg-slate-100 transition"
                              >
                                <p className="font-medium text-slate-800 truncate">
                                  <span className="text-slate-900">
                                    {labelPrefix}
                                  </span>{" "}
                                  <span className="text-slate-700">
                                    {doc.title ||
                                      tr(
                                        "library_untitled",
                                        "Sin título"
                                      )}
                                  </span>
                                </p>
                                {dateLabel && (
                                  <p className="text-xs text-slate-500 mt-0.5">
                                    {dateLabel}
                                  </p>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {isOpen && docsInFolder.length === 0 && (
                        <div className="ml-6 mt-1 text-xs text-slate-500">
                          {tr(
                            "folder_empty",
                            "Esta carpeta todavía no tiene documentos."
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL Crear carpeta */}
      {isFolderModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/45"
            onClick={closeFolderModal}
          />
          <div className="relative w-full max-w-lg bg-white rounded-[18px] border border-slate-200 shadow-[0_24px_80px_rgba(2,6,23,0.22)]">
            <div className="px-6 pt-5 pb-3 flex items-center justify-between">
              <h3 className="text-[18px] leading-6 font-semibold text-slate-900">
                {tr("folder_modal_title", "Crear nueva carpeta")}
              </h3>
              <button
                onClick={closeFolderModal}
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500"
                aria-label={tr("close", "Cerrar")}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-6 pb-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {tr("folder_modal_label", "Nombre de la carpeta")}
                </label>
                <input
                  autoFocus
                  value={folderName}
                  onChange={(e) => setFolderName(e.target.value)}
                  placeholder={tr(
                    "folder_modal_placeholder",
                    "Ponle un nombre…"
                  )}
                  className="w-full rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-[14px] leading-[22px] outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {docs.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-2">
                    {tr(
                      "folder_modal_select_docs",
                      "Elige qué documentos quieres guardar en esta carpeta"
                    )}
                  </p>
                  <div className="max-h-64 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50/60">
                    {docs.map((doc) => {
                      const { labelPrefix } = getDocVisual(doc);
                      const dateLabel = formatDateLabel(doc);
                      const checked = selectedDocIds.includes(doc.id);
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => toggleSelectedDoc(doc.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm ${
                            checked
                              ? "bg-white"
                              : "bg-transparent hover:bg-slate-100/70"
                          }`}
                        >
                          <div className="flex-1 text-left pr-3">
                            <p className="font-medium text-slate-800 truncate">
                              <span className="text-slate-900">
                                {labelPrefix}
                              </span>{" "}
                              <span className="text-slate-700">
                                {doc.title ||
                                  tr("library_untitled", "Sin título")}
                              </span>
                            </p>
                            {dateLabel && (
                              <p className="text-xs text-slate-500 mt-0.5">
                                {dateLabel}
                              </p>
                            )}
                          </div>
                          <input
                            type="checkbox"
                            readOnly
                            checked={checked}
                            className="h-4 w-4 rounded border-slate-300 text-sky-600"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {docs.length === 0 && (
                <p className="text-xs text-slate-500">
                  {tr(
                    "folder_modal_no_docs",
                    "Todavía no hay documentos en tu biblioteca."
                  )}
                </p>
              )}
            </div>
            <div className="px-6 pb-6 flex items-center justify-end gap-3">
              <button
                onClick={closeFolderModal}
                className="px-4 py-2 text-[14px] font-medium rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
              >
                {tr("folder_modal_cancel", "Cancelar")}
              </button>
              <button
                onClick={saveFolder}
                disabled={!folderName.trim()}
                className="px-4 py-2 text-[14px] font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {tr("folder_modal_save", "Guardar")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL Editar título del documento */}
      {editModalOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/45"
            onClick={closeEditModal}
          />
          <div className="relative w-full max-w-md bg-white rounded-[18px] border border-slate-200 shadow-[0_24px_80px_rgba(2,6,23,0.22)]">
            <div className="px-6 pt-5 pb-3 flex items-center justify-between">
              <h3 className="text-[18px] leading-6 font-semibold text-slate-900">
                {tr("library_doc_edit_title", "Editar título")}
              </h3>
              <button
                onClick={closeEditModal}
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500"
                aria-label={tr("close", "Cerrar")}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-6 pb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {tr("library_doc_title_label", "Título")}
              </label>
              <input
                autoFocus
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder={tr(
                  "library_doc_title_placeholder",
                  "Escribe un título"
                )}
                className="w-full rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-[14px] leading-[22px] outline-none focus:ring-2 focus:ring-sky-500"
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEditTitle();
                }}
              />
            </div>
            <div className="px-6 pb-6 flex items-center justify-end gap-3">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 text-[14px] font-medium rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"
              >
                {tr("cancel", "Cancelar")}
              </button>
              <button
                onClick={saveEditTitle}
                disabled={!editTitle.trim()}
                className="px-4 py-2 text-[14px] font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {tr("save", "Guardar")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
