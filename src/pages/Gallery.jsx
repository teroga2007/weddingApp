import { useParams } from "react-router-dom";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import PageWrapper from "../components/Layout/PageWrapper";
import preview1 from "../assets/couple-photos/MYN-26.webp";
import preview2 from "../assets/couple-photos/MYN-7.webp";
import preview3 from "../assets/couple-photos/MYN-41.webp";
import preview4 from "../assets/couple-photos/MYN-80.webp";
import preview5 from "../assets/couple-photos/MYN-73.webp";
import preview6 from "../assets/couple-photos/MYN-50.webp";
import i18n from "../i18n";

const previewImages = [
  preview1,
  preview2,
  preview3,
  preview4,
  preview5,
  preview6,
];

export default function Gallery() {
  const { lang } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <PageWrapper title={t("gallery.title")} titleBack={t("gallery.backTitle")}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-10">
        {/* Intro text */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-500">
            {t("gallery.heading")}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {t("gallery.description")}
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://photos.app.goo.gl/sU4YKg6kMUFvGfHg6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl mt-4 shadow-lg transition-all"
          >
            {t("gallery.cta")}
          </motion.a>
        </motion.div>

        {/* Mosaic preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 rounded-xl overflow-hidden"
        >
          {previewImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <motion.img
                src={img}
                alt={`preview-${idx}`}
                className="w-full aspect-[4/3] object-cover transition-transform"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Invite to upload */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="text-center text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          <p>{t("gallery.uploadInvite")}</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
