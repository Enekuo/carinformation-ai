import React, { useEffect, useRef, useState } from "react";
import { Plus, Mic } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function AssistantPage() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  // Estado del chat
  const [messages, setMessages] = useState([]); // { id, role: "user" | "assistant", content }
  const [input, setInput] = useState("");
  const [attachments, setAttachments] = useState([]); // File[]
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);
  const endRef = useRef(null);

  const isEmpty = messages.length === 0;
  const FILE_INPUT_ID = "euskalia-assistant-file-input";

  // Adjuntar archivos
  const onFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      setAttachments(files);
      if (!input.trim()) {
        setInput(files.map((f) => f.name).join(", "));
      }
      inputRef.current?.focus();
    }
    e.target.value = "";
  };

  // Nuevo chat
  const handleNewChat = () => {
    setMessages([]);
    setInput("");
    setAttachments([]);
  };

  // Enviar mensaje (aquí se puede conectar con /api/chat)
  const handleSend = async () => {
    const text = input.trim();
    if (!text && attachments.length === 0) return;

    const userMsg = {
      id: crypto.randomUUID?.() || String(Date.now()),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setAttachments([]);
    inputRef.current?.focus();

    // Llamada a la API de IA (ajusta la ruta y el contrato cuando tengas /api/chat)
    try {
      setLoading(true);

      const payloadMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        throw new Error("Error al llamar a la API");
      }

      const data = await res.json();

      const assistantContent =
        data.reply ||
        data.message ||
        tr("assistant_error_generic", "Ha ocurrido un error al generar la respuesta.");

      const assistantMsg = {
        id: crypto.randomUUID?.() || String(Date.now() + 1),
        role: "assistant",
        content: assistantContent,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const errorMsg = {
        id: crypto.randomUUID?.() || String(Date.now() + 2),
        role: "assistant",
        content: tr(
          "assistant_error_generic",
          "Ha ocurrido un error al generar la respuesta. Inténtalo de nuevo en unos segundos."
        ),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  // Scroll automático al final
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length]);

  // Componente burbuja
  const Bubble = ({ role, children }) => {
    const isUser = role === "user";
    return (
      <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
        <div
          className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-2 text-sm md:text-base whitespace-pre-wrap leading-relaxed ${
            isUser
              ? "bg-sky-600 text-white rounded-br-md"
              : "bg-slate-100 text-slate-800 rounded-bl-md"
          }`}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] w-full bg-slate-50 text-slate-900">
      {/* Input de archivos oculto */}
      <input
        id={FILE_INPUT_ID}
        type="file"
        multiple
        hidden
        onChange={onFiles}
        accept=".pdf,.txt,.doc,.docx,.md,.rtf,.json,.csv,image/*,audio/*,video/*"
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-10 flex flex-col h-[calc(100vh-6rem)]">
        {/* Cabecera del chat (título + botón nuevo chat) */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              {tr("assistant_title", "Chat de IA")}
            </h1>
            <p className="text-sm md:text-base text-slate-600 mt-1">
              {tr(
                "assistant_subtitle",
                "Haz preguntas, pide explicaciones o deja que la IA te ayude con tus textos en euskera y castellano."
              )}
            </p>
          </div>

          <button
            onClick={handleNewChat}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 h-10 text-sm font-medium hover:bg-slate-50"
          >
            <Plus className="w-4 h-4" />
            {tr("assistant_new_chat", "Nuevo chat")}
          </button>
        </div>

        {/* Zona de chat */}
        <div className="flex-1 flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className={`flex-1 ${isEmpty ? "overflow-hidden" : "overflow-y-auto"}`}>
            {/* Estado vacío: mascota / mensaje inicial */}
            {isEmpty && (
              <div className="max-w-3xl mx-auto w-full px-4 md:px-6 py-10">
                <div className="flex flex-col items-center text-center select-none mt-[8vh] md:mt-[10vh]">
                  <img
                    src="/euskalia-mascota.png"
                    alt="Euskalia asistente"
                    className="w-20 h-20 rounded-xl shadow-sm mb-3"
                    draggable={false}
                  />
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {tr("assistant_mascot_greeting", "¿En qué puedo ayudarte hoy?")}
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 mt-2 max-w-xl">
                    {tr(
                      "assistant_mascot_hint",
                      "Pide explicaciones, resúmenes o ideas en euskera y castellano. La IA adaptará la respuesta a lo que necesites."
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* Conversación */}
            {!isEmpty && (
              <div className="max-w-3xl mx-auto w-full px-4 md:px-6 pt-6 pb-24">
                {messages.map((m) => (
                  <Bubble key={m.id} role={m.role}>
                    {m.content}
                  </Bubble>
                ))}
                {loading && (
                  <Bubble role="assistant">
                    {tr("assistant_loading", "Pensando en la mejor respuesta…")}
                  </Bubble>
                )}
                <div ref={endRef} />
              </div>
            )}
          </div>

          {/* Zona de entrada (siempre visible) */}
          <div className="border-t border-slate-200 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 md:py-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <div className="flex items-center gap-2 rounded-[28px] border border-slate-200 bg-slate-50 px-3 py-2">
                  <label
                    htmlFor={FILE_INPUT_ID}
                    className="h-10 w-10 inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-slate-100"
                    title={tr("assistant_add", "Añadir archivos")}
                  >
                    <Plus className="w-5 h-5" />
                  </label>

                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder={tr(
                      "assistant_placeholder",
                      "Escribe tu mensaje o pregunta aquí…"
                    )}
                    rows={1}
                    className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-slate-400 resize-none"
                  />

                  <button
                    type="button"
                    className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-slate-100"
                    title={tr("assistant_voice", "Dictar por voz")}
                  >
                    <Mic className="w-5 h-5" />
                  </button>

                  <button
                    type="submit"
                    disabled={loading || (!input.trim() && attachments.length === 0)}
                    className="ml-1 inline-flex items-center justify-center rounded-full bg-sky-600 hover:bg-sky-700 text-white h-10 px-5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-label={tr("assistant_send", "Enviar")}
                  >
                    {tr("assistant_send", "Enviar")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
