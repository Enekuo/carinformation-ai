// src/pages/AuthPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";

export default function AuthPage() {
  const { t } = useTranslation?.() || { t: () => null };
  const tr = (k, f) => (typeof t === "function" ? t(k) : null) || f;

  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Aquí iría tu lógica real de login
    // Por ahora lo dejamos como demo
    alert("Demo: continuar con " + (email || "Google"));
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header minimal con marca */}
      <header className="h-16 w-full flex items-center px-6 sm:px-10">
        <Link to="/" className="text-slate-900 font-semibold tracking-tight">
          Euskalia
        </Link>
      </header>

      {/* Contenido centrado */}
      <main className="px-4">
        <div className="max-w-md mx-auto pt-6 sm:pt-10">
          {/* Icono superior (círculo simple) */}
          <div className="mx-auto h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
            <span className="text-indigo-600 font-bold">E</span>
          </div>

          {/* Título */}
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-slate-900">
            {tr("authPage.welcome", "Welcome back")}
          </h1>

          {/* Botón Google */}
          <button
            type="button"
            onClick={() => alert("Demo: continuar con Google")}
            className="mt-6 w-full h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-medium shadow-sm hover:shadow-md transition flex items-center justify-center"
          >
            {/* SVG Google inline para no depender de assets externos */}
            <svg
              className="h-5 w-5 mr-3"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.2H272v95h147.1c-6.3 34-25.1 62.7-53.5 81.8v67h86.6c50.7-46.7 81.3-115.6 81.3-193.6z" />
              <path fill="#34A853" d="M272 544.3c72.9 0 134.2-24.1 178.9-65.2l-86.6-67c-24.1 16.2-55 25.8-92.3 25.8-70.9 0-131-47.9-152.6-112.1H31.5v70.4C76 485.2 167.1 544.3 272 544.3z" />
              <path fill="#FBBC04" d="M119.4 325.8c-10.3-30.9-10.3-64.4 0-95.3V160H31.5c-42.7 85.5-42.7 188.5 0 274l87.9-67.2z" />
              <path fill="#EA4335" d="M272 106.5c39.7-.6 77.8 14 106.9 41.3l80.1-80.1C406.3 25.2 344.9 0 272 0 167.1 0 76 59.1 31.5 160l87.9 70.5C141 154.4 201.1 106.5 272 106.5z" />
            </svg>
            {tr("authPage.continueWithGoogle", "Continuar con Google")}
          </button>

          {/* Separador */}
          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-slate-200" />
            <span className="mx-4 text-slate-400 text-sm font-medium">
              {tr("authPage.or", "or")}
            </span>
            <div className="flex-grow border-t border-slate-200" />
          </div>

          {/* Formulario email + continuar */}
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tr(
                  "authPage.emailOrUserPlaceholder",
                  "Enter email or username"
                )}
                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold transition"
            >
              {tr("authPage.signInButton", "Continue")}
            </button>
          </form>

          {/* Legal */}
          <p className="mt-6 text-center text-xs text-slate-500">
            {tr("authPage.legalText.prefix", "By continuing, you agree to our")}{" "}
            <a href="#" className="underline hover:text-slate-700">
              {tr("authPage.legalText.terms", "Terms")}
            </a>{" "}
            {tr("authPage.legalText.and", "and")}{" "}
            <a href="#" className="underline hover:text-slate-700">
              {tr("authPage.legalText.privacy", "Privacy Policy")}
            </a>
            .
          </p>

          {/* Registro */}
          <p className="mt-4 text-center text-sm text-slate-600">
            {tr("authPage.noAccount", "Don't have an account?")}{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              {tr("authPage.signUp", "Sign up")}
            </a>
          </p>
        </div>
      </main> 
    </div>
  );
}
