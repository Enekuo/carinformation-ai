import React from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900">
      {/* Marca arriba a la izquierda */}
      <header className="px-8 py-6">
        <span className="font-semibold text-lg">Euskalia</span>
      </header>

      {/* Contenido centrado */}
      <main className="flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Avatar redondo */}
          <div className="h-16 w-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold text-2xl mb-6">
            E
          </div>

          {/* Título principal */}
          <h1 className="text-2xl font-semibold mb-6">
            Crea tu cuenta
          </h1>

          {/* Botón Google */}
          <button
            type="button"
            className="
              w-full flex items-center justify-center gap-3
              rounded-full border border-slate-200 bg-white
              py-3 text-sm font-medium shadow-sm
              hover:bg-slate-50 transition-colors
            "
          >
            <span
              className="
                h-5 w-5 rounded-full bg-slate-100
                flex items-center justify-center text-xs font-bold
              "
            >
              G
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
