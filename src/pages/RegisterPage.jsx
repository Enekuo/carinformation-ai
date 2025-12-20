import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans">
      {/* Navbar / Header */}
      <header className="w-full p-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Euskalia
        </Link>
        <Link
          to="/cuenta-pro"
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
        >
          Cuenta Pro
        </Link>
      </header>

      {/* Contenedor Principal Centrado */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-[440px] w-full text-center">
          
          {/* Título */}
          <h1 className="text-[32px] font-bold mb-10 text-[#0F172A]">
            Crea tu cuenta
          </h1>

          {/* Botones de Autenticación */}
          <div className="space-y-4">
            {/* Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-3.5 px-4 rounded-full shadow-sm hover:bg-slate-50 transition-all text-[15px] font-medium text-slate-700"
            >
              <img 
                src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" 
                alt="Google" 
                className="w-5 h-5"
              />
              Registrarte con Google
            </button>

            {/* Microsoft */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-3.5 px-4 rounded-full shadow-sm hover:bg-slate-50 transition-all text-[15px] font-medium text-slate-700"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                alt="Microsoft" 
                className="w-5 h-5"
              />
              Registrarte con Microsoft
            </button>
          </div>

          {/* Textos Legales */}
          <p className="mt-8 text-[13px] text-slate-500 leading-relaxed px-10">
            Al continuar, aceptas nuestros{" "}
            <Link to="/terminos" className="text-slate-500 hover:text-slate-800 underline underline-offset-2">
              Términos
            </Link>{" "}
            y{" "}
            <Link to="/privacidad" className="text-slate-500 hover:text-slate-800 underline underline-offset-2">
              Política de Privacidad
            </Link>.
          </p>

          {/* Enlace de Login */}
          <div className="mt-12 text-[15px] text-slate-600">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/iniciar-sesion"
              className="text-[#4F46E5] font-semibold hover:underline decoration-2 underline-offset-4"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}