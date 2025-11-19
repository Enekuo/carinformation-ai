import React from "react";
import { useTranslation } from "@/lib/translations";
import { motion, useAnimation } from "framer-motion";

export default function FeaturesSection() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  // Controlador para repetir la animación cada vez que entra en viewport
  const controls = useAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="w-full bg-[#F4F8FF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* TÍTULO + PÁRRAFO */}
        <div className="max-w-3xl">
          <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-extrabold text-slate-900 leading-tight mb-4">
            {tr("features.title", "")}
          </h2>
          <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed">
            {tr("features.paragraph", "")}
          </p>
        </div>

        {/* TARJETA PRINCIPAL */}
        <motion.div
          className="
            mt-10 md:mt-14
            bg-white rounded-3xl border border-slate-100
            shadow-[0_22px_70px_rgba(15,23,42,0.10)]
            px-4 sm:px-6 md:px-8 lg:px-10
            py-6 sm:py-8 md:py-9
          "
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          onViewportLeave={() => controls.set("hidden")}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* COLUMNA IZQUIERDA: 6 FILAS LARGAS */}
            <div className="w-full lg:w-[60%] space-y-4 md:space-y-5">
              <FeatureRow
                icon={
                  <CircleIcon>
                    <path
                      d="M7 4h10a1 1 0 0 1 1 1v12M7 4A2 2 0 0 0 5 6v12a2 2 0 0 1 2-2h10"
                      strokeWidth="2"
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
                      strokeWidth="2"
                    />
                    <path d="M13 4v4h5" strokeWidth="2" />
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
                      strokeWidth="2"
                    />
                    <path
                      d="M14.5 9.5 16 8a3 3 0 1 0-4.24-4.24l-2 2A3 3 0 0 0 11 10.5"
                      strokeWidth="2"
                    />
                  </CircleIcon>
                }
                title={tr("features.item3_title", "")}
                description={tr("features.item3_desc", "")}
              />

              <FeatureRow
                icon={
                  <CircleIcon>
                    <path
                      d="M6 7h12M6 17h12"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="7" r="2" strokeWidth="2" />
                    <circle cx="14" cy="17" r="2" strokeWidth="2" />
                  </CircleIcon>
                }
                title={tr("features.item4_title", "")}
                description={tr("features.item4_desc", "")}
              />

              <FeatureRow
                icon={
                  <CircleIcon>
                    <path d="M8 11V9a4 4 0 0 1 8 0v2" strokeWidth="2" />
                    <rect
                      x="7"
                      y="11"
                      width="10"
                      height="8"
                      rx="2"
                      strokeWidth="2"
                    />
                  </CircleIcon>
                }
                title={tr("features.item5_title", "")}
                description={tr("features.item5_desc", "")}
              />

              <FeatureRow
                icon={
                  <CircleIcon>
                    <path d="M13 3 7 13h4l-1 8 6-10h-4l1-8Z" strokeWidth="2" />
                  </CircleIcon>
                }
                title={tr("features.item6_title", "")}
                description={tr("features.item6_desc", "")}
              />
            </div>

            {/* COLUMNA DERECHA: BLOQUES EXPLICATIVOS */}
            <div
              className="
                w-full lg:w-[40%]
                border-t lg:border-t-0 lg:border-l border-slate-100
                pt-6 lg:pt-0 lg:pl-8
                space-y-6 md:space-y-7
              "
            >
              <FeatureHighlight
                icon={
                  <CircleIcon>
                    <path
                      d="M6 7h12M6 17h12"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="7" r="2" strokeWidth="2" />
                    <circle cx="14" cy="17" r="2" strokeWidth="2" />
                  </CircleIcon>
                }
                title={tr("features.highlight1_title", "")}
                description={tr("features.highlight1_desc", "")}
              />

              <FeatureHighlight
                icon={
                  <CircleIcon>
                    <path
                      d="M8 9a4 4 0 0 1 8 0v2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 14v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </CircleIcon>
                }
                title={tr("features.highlight2_title", "")}
                description={tr("features.highlight2_desc", "")}
              />

              <FeatureHighlight
                icon={
                  <CircleIcon>
                    <path d="M8 11V9a4 4 0 0 1 8 0v2" strokeWidth="2" />
                    <rect
                      x="7"
                      y="11"
                      width="10"
                      height="8"
                      rx="2"
                      strokeWidth="2"
                    />
                  </CircleIcon>
                }
                title={tr("features.highlight3_title", "")}
                description={tr("features.highlight3_desc", "")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==== Subcomponentes internos ==== */

function CircleIcon({ children }) {
  return (
    <svg
      className="w-10 h-10 text-blue-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
      {children}
    </svg>
  );
}

function FeatureRow({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 px-4 py-4">
      <div className="mt-[2px] shrink-0">{icon}</div>
      <div>
        <h4 className="text-[15px] md:text-[16px] font-semibold text-slate-900 mb-1">
          {title}
        </h4>
        <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureHighlight({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-[2px] shrink-0">{icon}</div>
      <div>
        <h3 className="text-[18px] md:text-[19px] font-semibold text-slate-900 mb-1.5">
          {title}
        </h3>
        <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
