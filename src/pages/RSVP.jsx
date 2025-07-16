import { useParams } from "react-router-dom";
import PageWrapper from "../components/Layout/PageWrapper";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function RSVP() {
  const { lang } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <PageWrapper title={t("rsvp.title")} titleBack="RSVP">
      <div className="relative w-full pb-[130%] sm:pb-[90%] md:pb-[75%] lg:pb-[65%] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScGODebnkra4m6HZfXgYTuG2XU4JESlJa7rnpwfHVyn-jsjtg/viewform?embedded=true"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          title="RSVP Form"
          sandbox="allow-forms allow-scripts allow-same-origin"
        >
          Loading…
        </iframe>
      </div>
      <noscript>
        <p className="text-center text-sm text-gray-600 mt-4">
          {t("rsvp.noscript1")}{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScGODebnkra4m6HZfXgYTuG2XU4JESlJa7rnpwfHVyn-jsjtg/viewform"
            className="text-primary-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("rsvp.noscript2")}
          </a>
          .
        </p>
      </noscript>
    </PageWrapper>
  );
}
