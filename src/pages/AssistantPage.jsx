import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function AssistantPage() {
  const { t } = useTranslation();
  const tr = (k) => t(k) || k;

  const [messages, setMessages] = useState([]); // { role, content }
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // Mantener el foco en el input al entrar en la página
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");

    // Volver a enfocar el input tras enviar
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput("");

    // Foco de nuevo al limpiar el chat
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Botón "Txat berria" arriba a la derecha */}
      <div className="flex justify-end px-6 pt-6">
        <button
          onClick={handleNewChat}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white
                     px-4 h-10 text-sm font-medium text-slate-700 shadow-sm
                     hover:bg-slate-50 hover:shadow-md transition"
        >
          <Plus className="w-4 h-4" />
          {tr("assistant_new_chat")}
        </button>
      </div>

      {/* CONTENIDO CENTRAL */}
      <div className="flex-1 flex flex-col items-center px-4 pb-8">
        {/* Mascota + título solo si no hay mensajes */}
        {isEmpty && (
          <div className="mt-12 mb-10 flex flex-col items-center text-center">
            <div className="mb-5 flex items-center justify-center">
              <img
                src="/olondo.mascota.png"
                alt="Euskalia IA"
                className="h-40 sm:h-44 md:h-48 w-auto"
                draggable={false}
              />
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
              {tr("assistant_title")}
            </h1>
          </div>
        )}

        {/* ZONA DE MENSAJES (aparece debajo cuando ya hay mensajes) */}
        {!isEmpty && (
          <div className="w-full max-w-3xl flex-1 overflow-y-auto mt-6 mb-6 pr-1">
            {messages.map((m, idx) => (
              <div key={idx} className="w-full flex justify-end mb-3">
                <div className="max-w-[85%] md:max-w-[70%] bg-sky-600 text-white rounded-2xl rounded-br-md px-4 py-2 text-sm md:text-base leading-relaxed">
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BARRA DE ESCRITURA */}
        <div
          className={
            isEmpty
              ? "w-full flex justify-center"
              : "w-full flex justify-center mt-auto mb-4"
          }
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="w-full max-w-3xl"
          >
            <div
              className="
                flex items-center gap-2
                rounded-full border border-slate-200 bg-white
                shadow-sm px-4 py-2
                hover:shadow-md transition
              "
            >
              {/* Botón + (reservado para adjuntar en el futuro) */}
              <button
                type="button"
                className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600"
              >
                <Plus className="w-4 h-4" />
              </button>

              {/* INPUT CONTROLADO */}
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  // Solo enviar con Enter (sin Shift)
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={tr("assistant_placeholder")}
                className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-slate-400 px-1"
              />

              {/* Botón Enviar */}
              <button
                type="submit"
                disabled={!input.trim()}
                className="
                  ml-2 h-9 px-6 rounded-full text-sm font-semibold text-white
                  bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed
                  transition
                "
              >
                {tr("assistant_send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
