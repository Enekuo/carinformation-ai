import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const MAX_CHARS = 1000;

export default function ProSuggestions() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!message.trim()) {
      setError("Por favor, escribe tu sugerencia antes de enviarla.");
      return;
    }

    if (message.trim().length < 20) {
      setError(
        "Añade un poco más de detalle para que podamos entender bien tu sugerencia."
      );
      return;
    }

    // Aquí en el futuro podrás enviar la sugerencia a una API o a un backend
    console.log({
      message,
      email,
    });

    setSubmitted(true);
    setMessage("");
    // Dejamos el email para que no tenga que volver a escribirlo si envía varias
  };

  return (
    <section className="w-full h-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 space-y-8">
        {/* Cabecera simple */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Ayúdanos a decidir las próximas mejoras de Euskalia
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Esta página es para que nos cuentes{" "}
            <span className="font-semibold text-slate-800">
              qué te gustaría que añadamos o mejoremos en Euskalia
            </span>
            : nuevas herramientas, cambios en el diseño, límites, ideas para
            estudiar mejor, cosas que te molestan… cualquier comentario es
            bienvenido.
          </p>
        </div>

        {/* Formulario muy simple */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm px-4 sm:px-6 py-5 sm:py-6 space-y-5"
        >
          <div className="grid gap-4">
            {/* Sugerencia */}
            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-700">
                Escribe aquí tu sugerencia
              </label>
              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value.slice(0, MAX_CHARS))
                }
                rows={6}
                placeholder="Cuéntanos qué herramienta, cambio o mejora te gustaría ver en Euskalia, y por qué crees que sería útil."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-300 resize-none"
              />
              <div className="flex justify-end">
                <span className="text-[11px] text-slate-500">
                  {message.length}/{MAX_CHARS} caracteres
                </span>
              </div>
            </div>

            {/* Email opcional */}
            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-700">
                Correo electrónico (opcional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Solo si quieres que podamos contactarte para aclarar algo."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-300"
              />
            </div>
          </div>

          {/* Mensajes de error / éxito */}
          {error && (
            <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
              {error}
            </p>
          )}

          {submitted && !error && (
            <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                Gracias por tu sugerencia. La tendremos en cuenta para las
                próximas mejoras.
              </span>
            </div>
          )}

          {/* Botón enviar */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 active:scale-95 transition"
            >
              <Send className="w-4 h-4" />
              Enviar sugerencia
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
