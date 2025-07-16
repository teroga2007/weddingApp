import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-500 text-center text-white text-sm p-4">
      © {currentYear} {t("footer.powered")}{" "}
      <a
        href="mailto:sterogam@gmail.com"
        className="text-md font-bold hover:underline"
      >
        S-Digital
      </a>{" "}
      | {t("footer.reserved")}
    </footer>
  );
}
