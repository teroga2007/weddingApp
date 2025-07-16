import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import i18n from "../../i18n";

export default function NotFound() {
  const { t } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-secondary-500 via-primary-500 to-green-500 p-6 text-white">
      <h1 className="text-9xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-4">
        {t("notFound.title")}
      </p>
      <p className="mb-8 max-w-md text-center opacity-90">
        {t("notFound.message")}
      </p>
      <Link
        to="/"
        className="inline-block bg-dark-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition"
      >
        {t("notFound.button")}
      </Link>
    </div>
  );
}
