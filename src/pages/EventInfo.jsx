import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import i18n from "../i18n";
import placeImages from "../data/places";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import PageWrapper from "../components/Layout/PageWrapper";
import GeneralInfo from "../components/Event-Info/GeneralInfo";
import Schedule from "../components/Schedule/Schedule";
import LodgingRecommendations from "../components/Lodging/LodgingRecommendations";
import { useEffect } from "react";

// Animación común para secciones que entran en viewport
const AnimatedSection = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function EventInfo() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const lodgingData = t("lodging", { returnObjects: true });

  const places = lodgingData.places.map((place, index) => ({
    ...place,
    image: placeImages[index] || null,
  }));

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <PageWrapper title={t("info.title")} titleBack={t("info.backTitle")}>
      <GeneralInfo
        className="mb-12"
        location="Mi Casita Tica, Puntarenas"
        dressCode={t("info.dresscode")}
        mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5374232785775!2d-84.74529299999999!3d9.9723898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0312bff0c4b65%3A0x1b4631f450aec21a!2sMi%20casita%20tica!5e0!3m2!1sen!2scr!4v1746066391874!5m2!1sen!2scr"
      />

      <AnimatedSection className="mb-12">
        <Schedule />
      </AnimatedSection>

      <AnimatedSection>
        <LodgingRecommendations
          section={lodgingData.section}
          description={lodgingData.description}
          places={places}
        />
      </AnimatedSection>
    </PageWrapper>
  );
}
