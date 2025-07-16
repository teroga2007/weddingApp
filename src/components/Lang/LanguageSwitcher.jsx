import { useNavigate, useLocation, matchPath } from "react-router-dom";
import { useEffect } from "react";

import i18n from "../../i18n";

function LanguageSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  const match = matchPath("/:lang/*", location.pathname);
  const currentLang = match?.params?.lang || "es";

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang]);

  const changeLanguage = (newLang) => {
    const pattern = new RegExp(`^/${currentLang}(/|$)`);
    const newPath = location.pathname.replace(pattern, `/${newLang}/`);
    navigate(newPath);
    i18n.changeLanguage(newLang);
  };

  return (
    <select
      value={currentLang}
      onChange={(e) => changeLanguage(e.target.value)}
      aria-label="Idioma"
      className="font-semibold text-sm outline-none cursor-pointer appearance-none px-2 rounded-lg"
    >
      <option value="es" className="bg-dark-500 text-white">
        ES
      </option>
      <option className="bg-dark-500 text-white" value="en">
        EN
      </option>
    </select>
  );
}

export default LanguageSwitcher;
