import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function AssistantPage() {
  const { t } = useTranslation();
  const tr = (k) => t(k) || k;

  const [messages, setMessages] = useState([]); // { id, role, content }
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const endRef = useRef(null);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput("");
  };

  const isEmpty = messages.length === 0;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length]);

  const Bubble = ({ role, children }) => {
    const isUser = role === "user";
    return (
      <div
        className={`w-full flex ${
          isUser ? "justify-end" : "justify-start"
        } mb-3`}
      >
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

  // Componente reutilizable para el campo de escritura
  const ChatInput = () => (
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
        {/* Botón + (para futuro: archivos, etc.) */}
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
  );

  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col overflow-hidden">
      {/* Botón "Txat berria / Nuevo chat" */}
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

      {/* ===== ESTADO SIN MENSAJES (héroe centrado) ===== */}
      {isEmpty ? (
        <div className="flex-1 flex flex-col items-center px-4 pb-16 mt-[-40px]">
          <div className="mt-16 mb-10 flex flex-col items-center text-center">
            {/* Mascota */}
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

          {/* Input centrado bajo el héroe */}
          <ChatInput />
        </div>
      ) : (
        /* ===== ESTADO CON MENSAJES (como ChatGPT) ===== */
        <div className="flex-1 flex flex-col items-center px-4 pb-4 mt-[-40px]">
          {/* Área de mensajes scrollable */}
          <div className="w-full max-w-3xl mx-auto flex-1 overflow-y-auto mt-10 mb-3 pr-1">
            {messages.map((m) => (
              <Bubble key={m.id} role={m.role}>
                {m.content}
              </Bubble>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input pegado abajo */}
          <div className="w-full flex justify-center pt-2 pb-4 bg-slate-50">
            <ChatInput />
          </div>
        </div>
      )}
    </div>
  );
}
