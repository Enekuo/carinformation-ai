// AuthPage (Crear Cuenta)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";

export default function AuthPage() {
  const { t } = useTranslation?.() || { t: () => null };
  const tr = (k, f) => (typeof t === "function" ? t(k) : null) || f;

  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Demo: continuar con " + (email || "Google"));
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900 flex flex-col">
      {/* 1. HEADER: Posición y tamaño exactos del logo "Euskalia" */}
      <header className="px-8 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          Euskalia
        </Link>

        {/* Mantenemos la estructura de la derecha para que el logo no se mueva */}
        <div className="flex items-center">
          <Link
            to="/cuenta-pro"
            className="
              text-sm font-semibold
              px-4 py-2 rounded-full
              bg-blue-600 text-white
              shadow-sm hover:bg-blue-700
              transition-colors
            "
          >
            Cuenta Pro
          </Link>
        </div>
      </header>

      {/* 2. BLOQUE CENTRAL: Mismas medidas que Iniciar Sesión */}
      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md flex flex-col items-center">
          
          {/* Círculo con 'E' */}
          <div className="mx-auto h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
            <span className="text-indigo-600 font-bold">E</span>
          </div>

          {/* TÍTULO CENTRAL */}
          <h1 className="text-2xl font-semibold mb-6 text-center">
            {tr("authPage.welcome", "Crea tu cuenta")}
          </h1>

          {/* BOTÓN GOOGLE */}
          <button
            type="button"
            onClick={() => alert("Demo: Google")}
            className="
              w-full flex items-center justify-center gap-3
              rounded-full border border-slate-200 bg-white
              py-3 text-sm font-medium shadow-sm
              hover:bg-slate-50 transition-colors
            "
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.2H272v95h147.1c-6.3 34-25.1 62.7-53.5 81.8v67h86.6c50.7-46.7 81.3-115.6 81.3-193.6z" />
              <path fill="#34A853" d="M272 544.3c72.9 0 134.2-24.1 178.9-65.2l-86.6-67c-24.1 16.2-55 25.8-92.3 25.8-70.9 0-131-47.9-152.6-112.1H31.5v70.4C76 485.2 167.1 544.3 272 544.3z" />
              <path fill="#FBBC04" d="M119.4 325.8c-10.3-30.9-10.3-64.4 0-95.3V160H31.5c-42.7 85.5-42.7 188.5 0 274l87.9-67.2z" />
              <path fill="#EA4335" d="M272 106.5c39.7-.6 77.8 14 106.9 41.3l80.1-80.1C406.3 25.2 344.9 0 272 0 167.1 0 76 59.1 31.5 160l87.9 70.5C141 154.4 201.1 106.5 272 106.5z" />
            </svg>
            <span>{tr("authPage.continueWithGoogle", "Registrarte con Google")}</span>
          </button>

          {/* SEPARADOR */}
          <div className="flex items-center w-full gap-4 my-6">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">
              {tr("authPage.or", "o")}
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          {/* FORMULARIO */}
          <form onSubmit={onSubmit} className="w-full space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={tr(
                "authPage.emailOrUserPlaceholder",
                "Introduce tu correo electrónico"
              )}
              className="
                w-full rounded-full border border-slate-200 bg-white
                px-4 py-3 text-sm outline-none
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
              "
            />

            <button
              type="submit"
              className="
                w-full rounded-full bg-slate-900 text-white
                py-3 text-sm font-semibold
                hover:bg-slate-950 transition-colors
              "
            >
              {tr("authPage.signInButton", "Crear cuenta")}
            </button>
          </form>

          {/* LEGAL */}
          <p className="mt-4 text-xs text-center text-slate-500">
            {tr("authPage.legalText.prefix", "Al continuar, aceptas nuestros")}{" "}
            <button type="button" className="underline hover:text-slate-700">
              {tr("authPage.legalText.terms", "Términos")}
            </button>{" "}
            {tr("authPage.legalText.and", "y")}{" "}
            <button type="button" className="underline hover:text-slate-700">
              {tr("authPage.legalText.privacy", "Política de Privacidad")}
            </button>
            .
          </p>

          {/* ENLACE INFERIOR */}
          <p className="mt-6 text-sm text-slate-600">
            {tr("authPage.noAccount", "¿Ya tienes cuenta?")}{" "}
            <Link to="/iniciar-sesion" className="font-medium text-indigo-600 hover:underline">
              {tr("authPage.signUp", "Iniciar sesión")}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}