import { useState, useEffect, useRef, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import timeline from "../data/timeline";

const bgColors = [
  "bg-primary-pattern",
  "bg-accent-pattern",
  "bg-green-pattern",
];
const textColorByBg = {
  "bg-primary-pattern": "text-white",
  "bg-accent-pattern": "text-dark-500",
  "bg-green-pattern": "text-white",
};

export default function Story2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
  const sectionRefs = useRef([]);

  // Sección está en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          const idx = sectionRefs.current.findIndex(
            (ref) => ref === visible.target
          );
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Navegación en Lightbox
  const prevImage = useCallback(() => {
    if (lightboxImageIndex === null) return;
    const count = timeline[activeIndex].image.length;
    setLightboxImageIndex((lightboxImageIndex - 1 + count) % count);
  }, [activeIndex, lightboxImageIndex]);

  const nextImage = useCallback(() => {
    if (lightboxImageIndex === null) return;
    const count = timeline[activeIndex].image.length;
    setLightboxImageIndex((lightboxImageIndex + 1) % count);
  }, [activeIndex, lightboxImageIndex]);

  const closeLightbox = () => setLightboxImageIndex(null);

  const handleBackgroundClick = (e) => {
    if (e.target.id === "lightbox-bg") closeLightbox();
  };

  useEffect(() => {
    if (lightboxImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImageIndex, prevImage, nextImage]);

  return (
    <div className="relative w-full">
      {/* Navegación lateral */}
      <nav
        className={`fixed z-50 flex gap-3 bg-dark-100/90 rounded-lg p-3 transition
        ${
          typeof window !== "undefined" && window.innerWidth < 768
            ? "bottom-4 left-1/2 transform -translate-x-1/2 flex-row"
            : "top-1/2 right-4 transform -translate-y-1/2 flex-col"
        }`}
      >
        {timeline.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label={`Ir a sección ${item.title}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-dark-500"
                : "bg-white hover:bg-dark-500"
            }`}
          />
        ))}
      </nav>

      {/* Secciones */}
      <div className="space-y-0">
        {timeline.map((item, index) => {
          const bgColor = bgColors[index % bgColors.length];
          const textColor = textColorByBg[bgColor];

          return (
            <section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`${bgColor} min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center`}
            >
              <motion.div
                className={`max-w-4xl text-center ${textColor}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xl md:text-2xl font-black uppercase mb-3">
                  — {item.date} —
                </h2>
                <h3 className="text-3xl md:text-6xl mb-10 font-handwriting">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg">{item.description}</p>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap justify-center gap-6 max-w-6xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {item.image.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    onClick={() => setLightboxImageIndex(imgIdx)}
                    className="w-40 h-28 md:w-64 md:h-44 rounded-lg overflow-hidden shadow-lg border-4 border-dark-500 hover:border-accent-500 transition cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Sección ${index} imagen ${imgIdx}`}
                      className="w-full h-full object-cover"
                      onLoad={(e) => {
                        const el = e.currentTarget;
                        const isVertical =
                          el.naturalHeight / el.naturalWidth > 1.3;
                        if (isVertical) {
                          el.classList.remove("object-cover");
                          el.classList.add(
                            "object-contain",
                            "object-top",
                            "bg-dark-500"
                          );
                        }
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImageIndex !== null && (
          <motion.div
            id="lightbox-bg"
            onClick={handleBackgroundClick}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-primary-500 z-50"
              aria-label="Cerrar imagen"
            >
              &times;
            </button>

            {timeline[activeIndex].image.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold hover:text-primary-500 z-50"
                aria-label="Anterior"
              >
                &#8592;
              </button>
            )}

            <motion.img
              key={timeline[activeIndex].image[lightboxImageIndex]}
              src={timeline[activeIndex].image[lightboxImageIndex]}
              alt="Imagen ampliada"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {timeline[activeIndex].image.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold hover:text-dark-500 z-50"
                aria-label="Siguiente"
              >
                &#8594;
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
