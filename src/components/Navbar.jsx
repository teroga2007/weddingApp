import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navLinks = [
    { to: "/event-info", label: "Info" },
    { to: "/story", label: "Historia" },
    { to: "/gifts", label: "Regalos" },
    { to: "/gallery", label: "Galería" },
    { to: "/rsvp", label: "Confirmar" },
    { to: "/faqs", label: "Preguntas Frecuentes" },
  ];

  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`navbar top-0 left-0 z-50 w-full px-6 md:px-12 text-white fixed 
        ${isHome ? "bg-transparent" : "bg-dark-500"}`}
    >
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-black font-handwriting hover:text-secondary-500 transition-colors duration-200"
        >
          Nicole & Marcial
        </Link>
      </div>

      {/* Menú personalizado con flechita */}
      <div className="flex-none relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="font-semibold flex items-center gap-1 select-none cursor-pointer"
        >
          Menú
          <span
            className={`transition-transform duration-300 ${
              menuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </button>

        {menuOpen && (
          <ul className="absolute right-0 mt-2 bg-dark-500 rounded-lg shadow-lg w-fit min-w-32 p-2 z-50">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block px-3 py-1 text-white hover:text-secondary-500 transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
