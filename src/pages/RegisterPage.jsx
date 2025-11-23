import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900 flex flex-col">
      {/* Barra superior: Euskalia (izquierda) + Cuenta Pro (derecha) */}
      <header className="px-8 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          Euskalia
        </Link>

        {/* Botón temporal para acceder a la cuenta Pro */}
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
      </header>

      {/* Contenido centrado vertical y horizontalmente */}
      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* TÍTULO */}
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Crea tu cuenta
          </h1>

          {/* Botón Google – icono plano como en iniciar sesión */}
          <button
            type="button"
            className="
              w-full flex items-center justify-center gap-3
              rounded-full border border-slate-200 bg-white
              py-3 text-sm font-medium shadow-sm
              hover:bg-slate-50 transition-colors
            "
          >
            <span className="mr-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6 1.54 7.38 2.84l5.42-5.42C33.64 3.46 29.3 1.5 24 1.5 14.78 1.5 7.06 6.98 3.9 14.9l6.87 5.33C12.13 14.64 17.49 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.5 24.5c0-1.57-.14-3.08-.41-4.5H24v9.02h12.7c-.55 2.9-2.23 5.36-4.76 7.02l7.43 5.77C43.82 38.21 46.5 31.9 46.5 24.5z"
                />
                <path
                  fill="#4A90E2"
                  d="M10.77 28.27A14.46 14.46 0 0 1 9.5 24c0-1.48.26-2.92.73-4.27l-6.87-5.33A22.4 22.4 0 0 0 1.5 24c0 3.62.87 7.04 2.4 10.06l6.87-5.79z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 46.5c5.85 0 10.77-1.93 14.36-5.22l-7.43-5.77C29.05 36.94 26.7 37.8 24 37.8c-6.51 0-11.87-5.14-13.23-11.93l-6.87 5.79C7.06 41.02 14.78 46.5 24 46.5z"
                />
              </svg>
            </span>
            <span>Registrarte con Google</span>
          </button>

          {/* Separador */}
          <div className="flex items-center w-full gap-4 my-6">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">o</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Formulario */}
          <form className="w-full space-y-4">
            <input
              type="email"
              className="
                w-full rounded-full border border-slate-200 bg-white
                px-4 py-3 text-sm outline-none
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
              "
              placeholder="Introduce tu correo electrónico"
            />

            <input
              type="text"
              className="
                w-full rounded-full border border-slate-200 bg-white
                px-4 py-3 text-sm outline-none
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
              "
              placeholder="Nombre o nombre de usuario"
            />

            <button
              type="submit"
              className="
                w-full rounded-full bg-slate-900 text-white
                py-3 text-sm font-semibold
                hover:bg-slate-950 transition-colors
              "
            >
              Crear cuenta
            </button>
          </form>

          {/* Términos y privacidad */}
          <p className="mt-4 text-xs text-center text-slate-500">
            Al continuar, aceptas nuestros{" "}
            <button type="button" className="underline">
              Términos
            </button>{" "}
            y{" "}
            <button type="button" className="underline">
              Política de Privacidad
            </button>
            .
          </p>

          {/* Enlace a iniciar sesión */}
          <p className="mt-6 text-sm text-slate-600">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/iniciar-sesion"
              className="font-medium text-indigo-600 hover:underline"
            >
              Iniciar sesión
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
