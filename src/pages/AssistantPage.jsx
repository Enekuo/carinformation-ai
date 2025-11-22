import React, { useState, useRef, useEffect } from "react";
import { Plus, Mic } from "lucide-react";
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
    <div className="min-h-screen w-full bg-white">
      {/* HEADER - New chat */}
      <div className="flex justify-end p-6">
        <button
          onClick={handleNewChat}
          className="flex items-center gap-2 px-4 h-10 rounded-full border border-slate-200
                     hover:bg-slate-100 text-sm font-medium text-slate-700"
        >
          <Plus className="w-4 h-4" />
          {tr("assistant_new_chat")}
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center text-center px-4">
        {isEmpty && (
          <>
            <img
              src="/olondo.mascota.png"
              alt="Euskalia IA"
              className="w-20 h-20 rounded-xl shadow-sm mb-4"
            />

            <h2 className="text-2xl md:text-3xl font-semibold mb-1">
              {tr("assistant_title")}
            </h2>

            <p className="text-slate-500 mb-10">
              {tr("assistant_mascot_hint")}
            </p>
          </>
        )}

        {/* INPUT BAR */}
        <div className="w-full max-w-3xl flex items-center rounded-full border border-slate-200 shadow-sm px-4 py-2 mb-20">
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-100">
            <Plus className="w-5 h-5 text-slate-600" />
          </button>

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
            className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-slate-400 px-2"
          />

          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-100">
            <Mic className="w-5 h-5 text-slate-600" />
          </button>

          <button
            onClick={handleSend}
            className="ml-2 px-6 h-10 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold"
          >
            {tr("assistant_send")} 
          </button>
        </div>  
      </div>
    </div>
  );
}
