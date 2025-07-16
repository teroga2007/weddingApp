import { Link, useLocation, matchPath } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../Lang/LanguageSwitcher";

export default function Navbar() {
  const location = useLocation();
  const { t } = useTranslation();

  // Extrae lang desde la ruta actual
  const match = matchPath("/:lang/*", location.pathname);
  const lang = match?.params?.lang || "es"; // fallback a 'es'

  const navLinks = [
    { to: "event-info", label: `${t("menu.info")}` },
    { to: "story", label: `${t("menu.story")}` },
    { to: "gifts", label: `${t("menu.gifts")}` },
    { to: "gallery", label: `${t("menu.gallery")}` },
    { to: "rsvp", label: `${t("menu.rsvp")}` },
    { to: "faqs", label: `${t("menu.faq")}` },
  ];

  const fullNavLinks = navLinks.map((link) => ({
    ...link,
    to: `/${lang}/${link.to}`,
  }));

  const isHome =
    location.pathname === `/${lang}/` || location.pathname === `/${lang}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 z-50 w-full px-6 md:px-12 text-white ${
        isHome ? "bg-transparent" : "bg-dark-500"
      }`}
    >
      <div className="flex-1">
        <Link
          to={`/${lang}`}
          className={`text-2xl font-black font-handwriting transition-colors duration-200 ${
            isHome ? "text-secondary-500" : "hover:text-secondary-500"
          }`}
        >
          Nicole & Marcial
        </Link>
      </div>

      <div className="flex gap-2 md:gap-6">
        <div className="flex-none relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="font-semibold flex items-center gap-1 select-none cursor-pointer"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            aria-label="Abrir menú de navegación"
          >
            {t("menu.menu")}
            <span
              className={`transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {menuOpen && (
            <ul
              className={`absolute mt-2 bg-dark-500 rounded-lg shadow-lg min-w-40 p-3 z-50 flex flex-col gap-2
              transform transition-all duration-300 origin-top ${
                menuOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none delay-75"
              }
            `}
            >
              {fullNavLinks.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`block transition-colors duration-200 ${
                        isActive
                          ? "text-secondary-500 font-bold"
                          : "text-white hover:text-secondary-500"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        |
        <div className="flex items-center gap-2 text-sm relative">
          <Languages className="w-4 h-4 text-white" />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
