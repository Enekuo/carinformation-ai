import React, { useState, useRef } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function AssistantPage() {
  const { t } = useTranslation();
  const tr = (k) => t(k) || k;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput("");
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* Botón "Nuevo chat" */}
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

      {/* Contenido principal */}
      <div className="flex flex-col items-center px-4 pb-16">
        {/* Bloque mascota + título */}
        {isEmpty && (
          <div className="mt-10 mb-10 flex flex-col items-center text-center">
            <div className="mb-4 rounded-2xl bg-white shadow-md p-3">
              <img
                src="/olondo.mascota.png"
                alt="Euskalia asistentzia"
                className="w-16 h-16 rounded-xl"
                draggable={false}
              />
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-1">
              {tr("assistant_title")}
            </h1>
            <p className="text-sm md:text-base text-slate-500">
              {tr("assistant_mascot_hint")}
            </p>
          </div>
        )}

        {/* Barra de entrada */}
        <div className="w-full flex justify-center">
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
              {/* Botón + (futuro adjuntar archivos) */}
              <button
                type="button"
                className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600"
              >
                <Plus className="w-4 h-4" />
              </button>

              {/* Input */}
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
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
