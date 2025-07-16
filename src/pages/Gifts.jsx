import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import PageWrapper from "../components/Layout/PageWrapper";
import foto1 from "../assets/elements/foto1.png";
import foto2 from "../assets/elements/foto3.jpg";
import foto4 from "../assets/elements/foto4.jpg";
import foto5 from "../assets/couple-photos/MYN-42.webp";
import foto6 from "../assets/couple-photos/MYN-59.webp";
import foto3 from "../assets/couple-photos/MYN-73.webp";
import i18n from "../i18n";

const photos = [
  { src: foto3, alt: "Special moment 6" },
  { src: foto1, alt: "Special moment 1" },
  { src: foto2, alt: "Special moment 2" },
  { src: foto4, alt: "Special moment 3" },
  { src: foto5, alt: "Special moment 4" },
  { src: foto6, alt: "Special moment 5" },
];

export default function Gifts() {
  const [current, setCurrent] = useState(0);
  const { lang } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper title={t("gifts.title")} titleBack={t("gifts.backTitle")}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12">
        {/* 💬 Main message */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            🎁 {t("gifts.messageTitle")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("gifts.message")}
          </p>
        </motion.div>

        {/* 💵 Bank details */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            💌 {t("gifts.monetaryTitle")}
          </h2>
          <p className="text-lg text-gray-700">{t("gifts.monetaryText")}</p>
          <ul className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <li className="bg-primary-50 p-4 rounded-xl shadow-inner bg-blue-900 text-white">
              <strong>🟢 {t("gifts.bankName")}:</strong>
              <br />
              <span className="text-sm">IBAN: CR78015202001404028785</span>
              <br />
              <span className="text-sm">
                {t("gifts.accountHolder")}: Nombre Completo
              </span>
              <br />
              <span className="text-sm">{t("gifts.cardType")}: VISA</span>
            </li>

            <li>
              <strong>📱 {t("gifts.sinpe")}:</strong>
              <br />
              {t("gifts.sinpeNumber")}: +506 8384 6353
            </li>
          </ul>
        </motion.div>

        {/* 📸 Carousel */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-6 flex flex-col items-center"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            📸 {t("gifts.carouselTitle")}
          </h2>

          <div
            className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photos[current].src}
                src={photos[current].src}
                alt={photos[current].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
