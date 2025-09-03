import { useEffect, useState } from "react";
import invite from "../assets/invite.png";
import inviteEn from "../assets/inviteEn.png";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import couplePhoto1 from "../assets/couple-photos/MYN-7.webp";
import couplePhoto2 from "../assets/couple-photos/MYN-42.webp";
import couplePhoto3 from "../assets/couple-photos/MYN-59.webp";
import couplePhoto4 from "../assets/couple-photos/MYN-73.webp";
import rose from "../assets/rose-outline-variant-with-vines-and-leaves.png";
import i18n from "../i18n";

const photos = [couplePhoto1, couplePhoto2, couplePhoto3, couplePhoto4];

export default function Home() {
  const { t } = useTranslation();
  const { lang } = useParams();

  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({});
  const [showInvite, setShowInvite] = useState(false);

  const units = {
    days: t("home.timer.days"),
    hours: t("home.timer.hours"),
    minutes: t("home.timer.minutes"),
    seconds: t("home.timer.seconds"),
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    const weddingDate = new Date("2026-02-28T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({});
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % photos.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden relative w-full h-screen">
      {/* BG Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={photos[currentImage]}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos[currentImage]})` }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-500/80 to-primary-500/50" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Icon Decorative */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={rose}
            alt="Icono decorativo"
            className="w-[180px] h-auto mx-auto"
          />
        </motion.div>

        <motion.span
          className="text-white uppercase tracking-widest text-sm font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("home.subtitle")}
        </motion.span>

        <motion.h1
          className="text-6xl md:text-8xl font-handwriting text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {t("home.title")}
        </motion.h1>

        {/* Timer Box */}
        <motion.div
          className="py-2 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {timeLeft.days !== undefined ? (
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-center text-white"
              role="timer"
              aria-label={`${timeLeft.days} ${t("home.timer.days")}, ${
                timeLeft.hours
              } ${t("home.timer.hours")}, ${timeLeft.minutes} ${t(
                "home.timer.minutes"
              )} y ${timeLeft.seconds} ${t("home.timer.seconds")}`}
            >
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold">
                    {value ?? "--"}{" "}
                  </span>
                  <span className="text-sm uppercase tracking-wide">
                    {units[unit]}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-dark-700">
              <p className="text-4xl font-extrabold font-handwriting mb-2 animate-pulse">
                {t("home.today")}
              </p>
              <p className="text-2xl font-bold">{t("home.married")}</p>
              <p className="mt-2 text-lg font-medium">{t("home.invitation")}</p>
            </div>
          )}
        </motion.div>
      </div>

      <motion.button
        onClick={() => setShowInvite(true)}
        className="mt-8 px-6 py-3 bg-secondary-500 text-black font-semibold rounded-2xl shadow-md hover:bg-accent-500 transition z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {lang === "es" ? "Ver Invitación" : "View Invitation"}
      </motion.button>

      {/* Lightbox para invitación */}
      <AnimatePresence>
        {showInvite && (
          <motion.div
            id="lightbox-bg"
            onClick={() => setShowInvite(false)}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={() => setShowInvite(false)}
              className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-primary-500 z-50"
              aria-label="Cerrar invitación"
            >
              &times;
            </button>

            <motion.img
              src={lang === "es" ? invite : inviteEn}
              alt="Invitación"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
