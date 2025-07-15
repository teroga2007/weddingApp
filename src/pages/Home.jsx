import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import couplePhoto1 from "../assets/couple-photos/MYN-7.webp";
import couplePhoto2 from "../assets/couple-photos/MYN-42.webp";
import couplePhoto3 from "../assets/couple-photos/MYN-59.webp";
import couplePhoto4 from "../assets/couple-photos/MYN-73.webp";
import rose from "../assets/rose-outline-variant-with-vines-and-leaves.png";

const photos = [couplePhoto1, couplePhoto2, couplePhoto3, couplePhoto4];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({});
  const units = {
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  };

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
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${photo})` }}
            initial={{ scale: 1 }}
            animate={index === currentImage ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-500/80 to-primary-500/40" />

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
          — es la boda de —
        </motion.span>

        <motion.h1
          className="text-6xl md:text-8xl font-handwriting text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Nicole & Marcial
        </motion.h1>

        {/* Timer Box */}
        <motion.div
          className="py-2 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {timeLeft.days !== undefined ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-center text-white">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <span className="text-4xl font-extrabold">{value}</span>
                  <span className="text-sm uppercase tracking-wide">
                    {units[unit]}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-dark-700">
              <p className="text-4xl font-extrabold font-handwriting mb-2 animate-pulse">
                🎉 ¡Hoy es el gran día!
              </p>
              <p className="text-2xl font-bold">¡Nos casamos! 💍</p>
              <p className="mt-2 text-lg font-medium">
                Les esperamos a todos en la fiesta ✨
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
