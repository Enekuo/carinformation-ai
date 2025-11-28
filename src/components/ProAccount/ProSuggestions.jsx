import React, { useState } from "react";
import { Lightbulb, Send, CheckCircle2 } from "lucide-react";

const MAX_CHARS = 1000;

export default function ProSuggestions() {
  const [type, setType] = useState("mejora");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!title.trim() || !message.trim()) {
      setError("Por favor, rellena al menos el título y la descripción de tu sugerencia.");
      return;
    }

    if (message.trim().length < 20) {
      setError("Añade un poco más de detalle para que podamos entender bien tu sugerencia.");
      return;
    }

    // Aquí en el futuro podrás enviar la sugerencia a una API o a un backend
    console.log({
      type,
      title,
      message,
      email,
    });

    setSubmitted(true);
    setTitle("");
    setMessage("");
    // dejamos el email y el tipo para que no tenga que volver a escribirlos
  };

  return (
    <section className="w-full h-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 space-y-8">
        {/* Cabecera */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            <Lightbulb className="w-4 h-4" />
            <span>Zona de sugerencias de Euskalia Pro</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Ayúdanos a decidir las próximas mejoras de Euskalia
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Esta página es para que nos cuentes{" "}
            <span className="font-semibold text-slate-800">
              qué te gustaría que añadamos o mejoremos en Euskalia
            </span>
            : nuevas herramientas, cambios en el diseño, límites, ideas para estudiar mejor,
            cosas que te molestan… cualquier comentario es bienvenido.
          </p>
        </div>

        {/* Pasos rápidos */}
        <div className="grid gap-3 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-1">
              1 · Piensa en tu idea
            </p>
            <p className="text-xs text-slate-600">
              Puede ser una nueva herramienta, una mejora del traductor, del resumidor o del
              área Pro.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-1">
              2 · Explícanos el contexto
            </p>
            <p className="text-xs text-slate-600">
              Cuéntanos cómo usas Euskalia y por qué esa mejora te ayudaría a ti (y a otras personas).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-1">
              3 · Envíala desde aquí
            </p>
            <p className="text-xs text-slate-600">
              Guardaremos tu sugerencia para priorizar las próximas funciones de Euskalia Pro.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm px-4 sm:px-6 py-5 sm:py-6 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                Enviar una sugerencia
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                No es un formulario de soporte técnico. Aquí solo recogemos ideas y mejoras.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Leemos todas las sugerencias, aunque no podamos responder una por una.
            </div>
          </div>

          <div className="grid gap-4">
            {/* Tipo de sugerencia */}
            <div className="grid gap-2 sm:grid-cols-3">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700">
                Tipo de sugerencia
              </label>
              <div className="sm:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "mejora", label: "Mejora de algo que ya existe" },
                    { value: "nueva_herramienta", label: "Nueva herramienta / función" },
                    { value: "otro", label: "Otro tipo de idea" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setType(option.value)}
                      className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs border ${
                        type === option.value
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      } transition-colors`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Título */}
            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-700">
                Título breve de tu sugerencia
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ejemplo: 'Modo estudio para resúmenes largos en euskera'"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400 focus:bg-white focus:ring-1 focus:ring-slate-300"
              />
            </div>

            {/* Mensaje */}
            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-700">
                Describe tu idea con detalle
              </label>
              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value.slice(0, MAX_CHARS))
                }
                rows={5}
                placeholder="Cuéntanos cómo usas Euskalia, qué te gustaría mejorar o qué herramienta nueva te ayudaría en tu día a día."
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
              <span>Gracias por tu sugerencia. La tendremos en cuenta para las próximas mejoras.</span>
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
