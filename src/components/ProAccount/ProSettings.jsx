import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  PlusCircle,
  Folder,
  CreditCard,
  Settings as SettingsIcon,
  User,
  Sun,
  Moon,
  Gem,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/components/layout/ThemeProvider";

/* --------------------------- Helpers UI --------------------------- */

const Field = ({ label, children, hint }) => (
  <div className="space-y-1.5">
    {label && (
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </label>
    )}
    {children}
    {hint && (
      <p className="text-xs text-slate-500 dark:text-slate-400">{hint}</p>
    )}
  </div>
);

const Section = ({ title, description, children }) => (
  <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 md:p-6">
    <div className="mb-4">
      <h2 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

const Row = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{children}</div>
);

/* --------------------------- Página principal --------------------------- */

export default function ProSettings() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  /* ---- FIX 1: Nombre en blanco ---- */
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
  });

  const [notifications, setNotifications] = useState({
    product: true,
    tips: true,
    billing: true,
  });

  const HEADER_COLOR = theme === "dark" ? "#262F3F" : "#ffffff";
  const SIDEBAR_COLOR = theme === "dark" ? "#354153" : "#f8f9fb";
  const ACTIVE_BG_COLOR = theme === "dark" ? "#262F3F" : "#e9eef5";
  const BORDER_COLOR = theme === "dark" ? "#1f2937" : "#e5e7eb";
  const HEADER_HEIGHT_PX = 72;
  const SIDEBAR_WIDTH_PX = 190;

  const USER_PLAN = "premium";
  const planLabel = USER_PLAN === "premium" ? "Plan Premium" : "Plan Básico";

  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  const navHoverBg =
    theme === "dark" ? "hover:bg-[#2B384A]" : "hover:bg-[#eef3f9]";
  const headerHoverBg =
    theme === "dark" ? "hover:bg-[#262F3F]" : "hover:bg-[#e9eef5]";
  const headerBtnBase =
    theme === "dark"
      ? "bg-slate-800 text-white border-0"
      : "bg-white text-slate-800 border border-slate-200";

  const saveAll = (e) => {
    e.preventDefault();
    alert(t("settings_cta_save"));
  };

  const planPillStyle =
    theme === "dark"
      ? {
          backgroundColor: "rgba(255,255,255,0.06)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)",
          color: "#E5E7EB",
        }
      : {
          backgroundColor: "#f3f4f6",
          boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.12)",
          color: "#0f172a",
        };

  const planIconBoxStyle =
    theme === "dark"
      ? {
          backgroundColor: "rgba(255,255,255,0.22)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.45)",
        }
      : {
          backgroundColor: "#ffffff",
          boxShadow:
            "inset 0 0 0 1px rgba(15,23,42,0.12), 0 1px 2px rgba(0,0,0,0.04)",
        };

  const planIconColor = theme === "dark" ? "#ffffff" : "#334155";

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* ----------------------------- HEADER ----------------------------- */}
      <header
        className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800"
        style={{
          backgroundColor: HEADER_COLOR,
          height: HEADER_HEIGHT_PX,
          borderColor: BORDER_COLOR,
        }}
      >
        <div className="w-full h-full px-4 sm:px-6 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="font-extrabold text-lg tracking-tight text-sky-400"
          >
            Euskalia
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 select-none">
              <div
                className="inline-flex items-center justify-center rounded-[10px]"
                style={{ width: 30, height: 30, ...planIconBoxStyle }}
              >
                <Gem className="w-5 h-5" style={{ color: planIconColor }} />
              </div>
              <div
                className="rounded-xl px-3 py-1.5 text-sm font-medium"
                style={planPillStyle}
              >
                {planLabel}
              </div>
            </div>

            {/* Idioma */}
            <div
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors cursor-pointer ${headerHoverBg}`}
            >
              🌐
            </div>

            {/* Tema */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors cursor-pointer ${headerBtnBase} ${headerHoverBg}`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors cursor-pointer ${headerBtnBase} ${headerHoverBg}`}
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ----------------------------- MAIN LAYOUT ----------------------------- */}
      <div className="w-full">
        <div className="grid gap-0 md:grid-cols-[190px_1fr]">
          {/* ----------------------------- SIDEBAR ----------------------------- */}
          <aside
            className="border-r border-slate-200 dark:border-slate-800"
            style={{ borderColor: BORDER_COLOR }}
          >
            <div
              className="sticky ps-2 pe-3 pt-6 pb-0"
              style={{
                backgroundColor: SIDEBAR_COLOR,
                top: HEADER_HEIGHT_PX,
                height: `calc(100vh - ${HEADER_HEIGHT_PX}px)`,
                width: SIDEBAR_WIDTH_PX,
              }}
            >
              <div className="h-full flex flex-col justify-between">
                <nav className="space-y-1 text-slate-800 dark:text-slate-100">
                  <Link
                    to="/dashboard"
                    className={`w-full flex items-center gap-3 h-11 ps-2 pe-2 rounded-xl ${navHoverBg}`}
                    style={
                      isActive("/dashboard")
                        ? { backgroundColor: ACTIVE_BG_COLOR }
                        : undefined
                    }
                  >
                    <Home className="w-5 h-5" />
                    <span>{t("dashboard_nav_home")}</span>
                  </Link>

                  <Link
                    to="/create"
                    className={`w-full flex items-center gap-3 h-11 ps-2 pe-2 rounded-xl ${navHoverBg}`}
                    style={
                      isActive("/create")
                        ? { backgroundColor: ACTIVE_BG_COLOR }
                        : undefined
                    }
                  >
                    <PlusCircle className="w-5 h-5" />
                    <span>{t("dashboard_nav_create")}</span>
                  </Link>

                  <Link
                    to="/library"
                    className={`w-full flex items-center gap-3 h-11 ps-2 pe-2 rounded-xl ${navHoverBg}`}
                    style={
                      isActive("/library")
                        ? { backgroundColor: ACTIVE_BG_COLOR }
                        : undefined
                    }
                  >
                    <Folder className="w-5 h-5" />
                    <span>{t("dashboard_nav_library")}</span>
                  </Link>

                  <Link
                    to="/assistant"
                    className={`w-full flex items-center gap-3 h-11 ps-2 pe-2 rounded-xl ${navHoverBg}`}
                    style={
                      isActive("/assistant")
                        ? { backgroundColor: ACTIVE_BG_COLOR }
                        : undefined
                    }
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{t("dashboard_nav_ai_chat")}</span>
                  </Link>

                  <Link
                    to="/pricing"
                    className={`w-full flex items-center gap-3 h-11 ps-2 pe-2 rounded-xl ${navHoverBg}`}
                    style={
                      isActive("/pricing")
                        ? { backgroundColor: ACTIVE_BG_COLOR }
                        : undefined
                    }
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>{t("dashboard_nav_plans")}</span>
                  </Link>
                </nav>

                {/* Ajustes */}
                <div className="pb-0">
                  <Link
                    to="/settings"
                    className={`w-full flex items-center gap-3 h-11 ps-2 pe-2 rounded-xl ${navHoverBg}`}
                    style={
                      isActive("/settings")
                        ? { backgroundColor: ACTIVE_BG_COLOR }
                        : undefined
                    }
                  >
                    <SettingsIcon className="w-5 h-5" />
                    <span>{t("dashboard_nav_settings")}</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* ----------------------------- CONTENIDO ----------------------------- */}
          <main>
            <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-12 py-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {t("settings_title")}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                {t("settings_subtitle")}
              </p>

              <form onSubmit={saveAll} className="space-y-8">

                {/* ----------------------------- PERFIL ----------------------------- */}
                <Section
                  title={t("settings_profile_title")}
                  description={t("settings_profile_desc")}
                >
                  <Row>
                    <Field label={t("settings_profile_display_name")}>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                        value={profile.displayName}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            displayName: e.target.value,
                          })
                        }
                        placeholder={t(
                          "settings_profile_display_name_ph"
                        )}
                      />
                    </Field>

                    <Field label={t("settings_profile_email")}>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({ ...profile, email: e.target.value })
                        }
                        placeholder="nombre@ejemplo.com"
                      />
                    </Field>
                  </Row>

                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {t("settings_profile_security_hint")}
                  </div>
                </Section>

                {/* ----------------------------- APARIENCIA ----------------------------- */}
                <Section
                  title={t("settings_appearance_title")}
                  description={t("settings_appearance_desc")}
                >
                  <Row>
                    <Field label={t("settings_appearance_theme")}>
                      <select
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                      >
                        <option value="system">{t("settings_appearance_system")}</option>
                        <option value="light">{t("settings_appearance_light")}</option>
                        <option value="dark">{t("settings_appearance_dark")}</option>
                      </select>
                    </Field>

                    {/* ---- FIX 2: Selector moderno ---- */}
                    <Field
                      label={t("settings_appearance_language")}
                      hint={t("settings_appearance_language_hint")}
                    >
                      <div className="relative">
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="
                            w-full appearance-none rounded-xl 
                            border border-slate-300 dark:border-slate-700
                            bg-white dark:bg-slate-900 
                            px-4 py-2.5 text-sm shadow-sm
                            hover:shadow-md transition-all
                            focus:ring-2 focus:ring-sky-500 outline-none
                          "
                        >
                          <option value="EUS">Euskara</option>
                          <option value="ES">Español</option>
                          <option value="EN">English</option>
                          <option value="FR">Français</option>
                        </select>

                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                          ▼
                        </div>
                      </div>
                    </Field>
                  </Row>
                </Section>

                {/* ----------------------------- NOTIFICACIONES ----------------------------- */}
                <Section
                  title={t("settings_notifications_title")}
                  description={t("settings_notifications_desc")}
                >
                  <div className="space-y-3">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-sky-600"
                        checked={notifications.product}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            product: e.target.checked,
                          })
                        }
                      />
                      <div>
                        <div className="text-sm font-medium">
                          {t("settings_notifications_product")}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t("settings_notifications_product_hint")}
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-sky-600"
                        checked={notifications.tips}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            tips: e.target.checked,
                          })
                        }
                      />
                      <div>
                        <div className="text-sm font-medium">
                          {t("settings_notifications_tips")}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t("settings_notifications_tips_hint")}
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-sky-600"
                        checked={notifications.billing}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            billing: e.target.checked,
                          })
                        }
                      />
                      <div>
                        <div className="text-sm font-medium">
                          {t("settings_notifications_billing")}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t("settings_notifications_billing_hint")}
                        </p>
                      </div>
                    </label>
                  </div>
                </Section>

                {/* ----------------------------- BOTÓN GUARDAR ----------------------------- */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-medium"
                  >
                    {t("settings_cta_save")}
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
