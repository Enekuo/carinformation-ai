import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";

/**
 * CtaSection robusta: anima un halo grande (radial) que sube y baja usando transform inline
 * - No depende de @keyframes ni de clases construidas en Tailwind (evita CSP / purge issues)
 * - Tiene z-index controlado: halo zIndex=1, contenido zIndex=2
 * - Incluye flags de debugging para forzar visibilidad y comprobar que el componente se renderiza
 *
 * Si sigue sin verse:
 * 1) Abre DevTools → Console: ¿hay errores? (pegar aquí)
 * 2) Si ves el halo en color sólido cuando debug=true pero no en normal, probar aumentar size/opacity.
 */

export default function CtaSection() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  // Ref al elemento halo para manipular su transform
  const haloRef = useRef(null);

  // Duración del ciclo en ms
  const DURATION = 9000;

  // debug: si true fuerza visibilidad máxima y fondo de prueba
  const debug = false;

  useEffect(() => {
    let rafId = null;
    const start = performance.now();

    function animate(now) {
      const elapsed = (now - start) % DURATION;
      // Oscilación suave (seno) entre +40% (abajo) y -10% (arriba)
      const tNorm = elapsed / DURATION; // 0..1
      const sin = Math.sin(tNorm * Math.PI * 2); // -1..1
      // Map sin (-1..1) to translateY percent (40 -> -10)
      const from = 40;
      const to = -10;
      const translateY = from + ((sin + 1) / 2) * (to - from); // smooth

      if (haloRef.current) {
        haloRef.current.style.transform = `translateX(-50%) translateY(${translateY}%)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      aria-labelledby="cta-title"
      className={`
        relative w-full bg-no-repeat bg-cover bg-center
        min-h-[60vh] md:min-h-[64vh] lg:min-h-[70vh] py-24 md:py-28
        overflow-hidden
        ${debug ? "bg-pink-600" : "bg-[#1e73ff]"} /* fallback visible color */
      `}
      style={{ backgroundImage: "url('/cta-background.png')" }}
    >
      {/* === HALO ANIMADO (JS-driven, inline styles) === */}
      <div
        aria-hidden
        // halo container is above the background (z 1) but below content (z 2)
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <div
          ref={haloRef}
          // centered horizontally, positioned visually below (bottom negative)
          style={{
            position: "absolute",
            left: "50%",
            // translateX(-50%) will be aplicado por transform en useEffect también
            transform: "translateX(-50%) translateY(40%)",
            // TAMAÑO deliberadamente GRANDE para que se vea en cualquier pantalla
            width: debug ? "1600px" : "1400px",
            height: debug ? "1600px" : "1400px",
            bottom: debug ? "-60%" : "-60%",
            // radial gradient: fuerte en el centro y desvaneciendo
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.36) 28%, rgba(255,255,255,0.14) 52%, rgba(255,255,255,0) 70%)",
            filter: "blur(40px)",
            opacity: debug ? 1 : 0.92,
            // ensure it is rendered on GPU for smooth transforms
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* Contenido - zIndex superior */}
      <div style={{ position: "relative", zIndex: 2 }} className="relative z-10 w-full">
        <div
          className="
            flex flex-col items-start text-left gap-6
            pl-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-28
            max-w-[980px]
          "
        >
          <h2
            id="cta-title"
            className="
              text-white font-extrabold leading-tight
              text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            "
          >
            {tr("cta.title", "Lleva tu experiencia Euskalia al siguiente nivel")}
          </h2>

          <p className="text-white/90 text-base sm:text-lg md:text-xl">
            {tr(
              "cta.subtitle",
              "Guarda tus textos, elimina los anuncios y disfruta sin límites."
            )}
          </p>

          {/* Botón blanco compacto */}
          <div className="pt-4">
            <Link
              to="/pricing"
              className="
                group inline-flex items-center gap-2
                bg-white hover:bg-white/90
                text-blue-700 font-medium
                text-base md:text-[17px]
                px-6 md:px-7 py-2 md:py-2.5
                rounded-[12px]
                shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)]
                transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-white/40
              "
              aria-label={tr("cta.button", "Hasi doain")}
            >
              <span className="text-sm md:text-base" aria-hidden>
                🚀
              </span>
              <span>{tr("cta.button", "Hasi doain")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
