// src/components/ProAccount/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Clock,
  Sparkles,
  Settings,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900 flex">
      {/* SIDEBAR PRO */}
      <aside
        className="
          w-64 bg-white border-r border-slate-200
          flex flex-col px-4 py-6
        "
      >
        <div className="mb-8">
          <Link to="/" className="text-lg font-bold tracking-tight">
            Euskalia Pro
          </Link>
          <p className="text-xs text-slate-500 mt-1">
            Panel en desarrollo
          </p>
        </div>

        <nav className="space-y-1 text-sm">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white font-medium">
            <LayoutDashboard size={16} />
            <span>Inicio</span>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Clock size={16} />
            <span>Historial</span>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Sparkles size={16} />
            <span>Herramientas Pro</span>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Settings size={16} />
            <span>Ajustes</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-200 text-xs text-slate-500">
          Versión interna · Solo para pruebas
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 px-8 py-8">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Bienvenido a Euskalia Pro</h1>
            <p className="text-sm text-slate-500 mt-1">
              Aquí iremos activando las funciones avanzadas de tu cuenta.
            </p>
          </div>

          <Link
            to="/"
            className="text-xs font-medium text-blue-600 hover:underline"
          >
            Volver al traductor
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-sm font-semibold mb-2">
              Próximamente en tu cuenta Pro
            </h2>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Historial de traducciones y resúmenes.</li>
              <li>• Límites ampliados y prioridad en la cola.</li>
              <li>• Panel con estadísticas de uso.</li>
              <li>• Opciones avanzadas para audio y documentos.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-sm font-semibold mb-2">
              Estado actual
            </h2>
            <p className="text-sm text-slate-600">
              Esta área es solo para desarrollo. Puedes usarla para ir
              probando ideas de diseño y componentes, sin afectar a las
              páginas públicas de Euskalia.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
