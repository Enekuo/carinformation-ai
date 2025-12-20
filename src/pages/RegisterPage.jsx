import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900 flex flex-col font-sans">
      {/* Barra superior */}
      <header className="px-8 py-6 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-slate-800">
          Euskalia
        </Link>

        <Link
          to="/cuenta-pro"
          className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#2563EB] text-white shadow-md hover:bg-blue-700 transition-all active:scale-95"
        >
          Cuenta Pro
        </Link>
      </header>

      {/* Contenido centrado */}
      <main className="flex-1 flex items-center justify-center px-4 pb-20">
        <div className="w-full max-w-[400px] flex flex-col items-center">
          
          <h1 className="text-[32px] font-bold mb-10 text-slate-800 tracking-tight">
            Crea tu cuenta
          </h1>

          <div className="w-full space-y-3">
            {/* BOTÓN GOOGLE */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors active:bg-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6 1.54 7.38 2.84l5.42-5.42C33.64 3.46 29.3 1.5 24 1.5 14.78 1.5 7.06 6.98 3.9 14.9l6.87 5.33C12.13 14.64 17.49 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.5 24.5c0-1.57-.14-3.08-.41-4.5H24v9.02h12.7c-.55 2.9-2.23 5.36-4.76 7.02l7.43 5.77C43.82 38.21 46.5 31.9 46.5 24.5z"/>
                <path fill="#4A90E2" d="M10.77 28.27A14.46 14.46 0 0 1 9.5 24c0-1.48.26-2.92.73-4.27l-6.87-5.33A22.4 22.4 0 0 0 1.5 24c0 3.62.87 7.04 2.4 10.06l6.87-5.79z"/>
                <path fill="#FBBC05" d="M24 46.5c5.85 0 10.77-1.93 14.36-5.22l-7.43-5.77C29.05 36.94 26.7 37.8 24 37.8c-6.51 0-11.87-5.14-13.23-11.93l-6.87 5.79C7.06 41.02 14.78 46.5 24 46.5z"/>
              </svg>
              Registrarte con Google
            </button>

            {/* BOTÓN MICROSOFT */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors active:bg-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="h-5 w-5">
                <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                <rect x="13" y="1" width="9" height="9" fill="#7FBA00" />
                <rect x="1" y="13" width="9" height="9" fill="#00A4EF" />
                <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
              </svg>
              Registrarte con Microsoft
            </button>
          </div>

          {/* Términos */}
          <p className="mt-8 text-[13px] text-center text-slate-500 max-w-[320px]">
            Al continuar, aceptas nuestros{" "}
            <Link to="/terminos" className="underline decoration-slate-300 hover:text-slate-800">
              Términos
            </Link>{" "}
            y{" "}
            <Link to="/privacidad" className="underline decoration-slate-300 hover:text-slate-800">
              Política de Privacidad
            </Link>.
          </p>

          {/* Login */}
          <p className="mt-10 text-sm text-slate-600">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/iniciar-sesion"
              className="font-semibold text-blue-600 hover:underline"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}