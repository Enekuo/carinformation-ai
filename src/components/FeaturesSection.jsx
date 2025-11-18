import React from "react";
import { useTranslation } from "@/lib/translations";

export default function FeaturesSection() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  return (
    <section className="w-full bg-[#F4F8FF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        {/* BLOQUE TITULAR + PÁRRAFO + IMAGEN */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* TEXTO */}
          <div className="w-full lg:basis-6/12 text-left">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-extrabold text-slate-900 leading-tight mb-5">
              {tr("features.title", "")}
            </h2>

            <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
              {tr("features.paragraph", "")}
            </p>
          </div>

          {/* IMAGEN */}
          <div className="w-full lg:basis-6/12 flex justify-center lg:justify-end">
            <div
              className="
                bg-white rounded-3xl border border-slate-100
                shadow-[0_18px_60px_rgba(15,23,42,0.08)]
                px-6 py-6 md:px-10 md:py-8
                flex items-center justify-center
                w-full max-w-[420px]
              "
            >
              <img
                src="/features-euskalia.png"
                alt=""
                className="w-full max-w-[360px]"
              />
            </div>
          </div>
        </div>

        {/* TARJETA DE CARACTERÍSTICAS */}
        <div
          className="
            bg-white rounded-3xl border border-slate-100
            shadow-[0_18px_60px_rgba(15,23,42,0.08)]
            px-4 sm:px-6 md:px-8 lg:px-10
            py-6 sm:py-7 md:py-8
          "
        >
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {/* Columna izquierda */}
            <div className="space-y-4 md:space-y-5">
              <FeatureRow
                icon={
                  <CircleIcon>
                    <path
                      d="M7 4h10a1 1 0 0 1 1 1v12M7 4A2 2 0 0 0 5 6v12a2 2 0 0 1 2-2h10"
                      strokeWidth="1.9"
                    />
                  </CircleIcon>
                }
                title={tr("features.item1_title", "")}
                description={tr("features.item1_desc", "")}
              />

              <FeatureRow
                icon={
                  <CircleIcon>
                    <path
                      d="M9 4h6l3 3v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                      strokeWidth="1.9"
                    />
                    <path d="M13 4v4h5" strokeWidth="1.9" />
                  </CircleIcon>
                }
                title={tr("features.item2_title", "")}
                description={tr("features.item2_desc", "")}
              />

              <FeatureRow
                icon={
                  <CircleIcon>
                    <path
                      d="M9.5 14.5 8 16a3 3 0 0 0 4.24 4.24l2-2A3 3 0 0 0 13 13.5"
                      strokeWidth="1.9"
                    />
                    <path
                      d="M14.5 9.5 16 8a3 3 0 1 0-4.24-4.24l-2 2A3 3 0 0 0 11 10.5"
                      strokeWidth="1.9"
                    />
                  </CircleIcon>
                }
                title={tr("features.item3_title", "")}
                description={tr("features.item3_desc", "")}
              />
            </div>

            {/* Columna derecha */}
            <div className="space-y-4 md:space-y-5">
              <FeatureRow
                icon={
                  <CircleIcon>
                    <path
                      d="M6 7h12M6 17h12"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="7" r="2" strokeWidth="1.9" />
                    <circle cx="14" cy="17" r="2" strokeWidth="1.9" />
                  </CircleIcon>
                }
                title={tr("features.item4_title", "")}
                description={tr("features.item4_desc", "")}
              />

              <FeatureRow
                icon={
                  <CircleIcon>
                    <path d="M8 11V9a4 4 0 0 1 8 0v2" strokeWidth="1.9" />
                    <rect
                      x="7"
                      y="11"
                      width="10"
                      height="8"
                      rx="2"
                      strokeWidth="1.9"
                    />
                  </CircleIcon>
                }
                title={tr("features.item5_title", "")}
                description={tr("features.item5_desc", "")}
              />

              <FeatureRow
                icon={
                  <CircleIcon>
                    <path
                      d="M13 3 7 13h4l-1 8 6-10h-4l1-8Z"
                      strokeWidth="1.9"
                    />
                  </CircleIcon>
                }
                title={tr("features.item6_title", "")}
                description={tr("features.item6_desc", "")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==== Subcomponentes internos ==== */

function CircleIcon({ children }) {
  return (
    <svg
      className="w-9 h-9 text-blue-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1.6" />
      {children}
    </svg>
  );
}

function FeatureRow({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-slate-50/70 px-4 py-3.5">
      <div className="mt-[2px] shrink-0">{icon}</div>
      <div>
        <h4 className="text-sm md:text-[15px] font-semibold text-slate-900 mb-0.5">
          {title}
        </h4>
        <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
