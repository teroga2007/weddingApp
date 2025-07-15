// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dresscode from "../assets/formal-tropical.png";
import img1 from "../assets/mosaic/img1.jpg";
import img2 from "../assets/mosaic/img2.png";

export default function GeneralInfo({
  location,
  mapEmbed,
  dressCode,
  className,
}) {
  const [pinterestLoaded, setPinterestLoaded] = useState(true);
  const pinterestRef = useRef(null);

  useEffect(() => {
    // Cargar script de Pinterest
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.pinterest.com/js/pinit.js";
    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      if (pinterestRef.current) {
        const height = pinterestRef.current.offsetHeight;
        if (height < 100) {
          setPinterestLoaded(false);
        }
      }
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`space-y-10 ${className}`}>
      {/* Lugar y Fecha */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 160, damping: 20 }}
        className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden"
      >
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left bg-gradient-to-br from-primary-100 to-white">
          <h3 className="text-2xl font-extrabold text-primary-600 mb-4">
            ¿Dónde y cuándo?
          </h3>
          <p className="text-gray-700 text-md mb-1">{location}</p>
          <p className="text-gray-700 text-md mb-1">28 de Febrero, 2026</p>
          <p className="text-gray-700 text-md">3:00PM</p>
        </div>

        <div className="md:w-1/2 h-72 md:h-auto">
          <iframe
            src={mapEmbed}
            width="100%"
            height="100%"
            className="w-full h-full"
            loading="lazy"
            style={{ border: "0", borderRadius: "0 1.5rem 1.5rem 0" }}
            title="Mapa del evento"
          />
        </div>
      </motion.div>

      {/* Código de vestimenta + Pinterest */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 160, damping: 20 }}
        className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden"
      >
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left bg-gradient-to-br from-white to-primary-50">
          <h3 className="text-2xl font-extrabold text-primary-600 mb-4">
            Código de Vestimenta
          </h3>
          <p className="text-gray-700 text-md mb-3">{dressCode}</p>
          <p className="text-sm text-gray-500">
            Consulta el{" "}
            <a
              className="font-bold text-dark-500 hover:underline cursor-pointer"
              href="https://www.pinterest.com/ter0ga/c%C3%B3digo-de-vestimenta-formal-tropical/"
            >
              tablero{" "}
            </a>
            de inspiración para ideas visuales.
            <img
              src={dresscode}
              alt="Formal Tropical example"
              className="w-32"
              loading="lazy"
            />
          </p>
        </div>

        <div
          className="md:w-1/2 h-full p-4 flex flex-col justify-center"
          ref={pinterestRef}
        >
          {pinterestLoaded ? (
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="400"
              data-pin-scale-height="200"
              data-pin-scale-width="80"
              href="https://www.pinterest.com/ter0ga/c%C3%B3digo-de-vestimenta-formal-tropical/"
            ></a>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {[img1, img2].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`inspo-${i}`}
                  className="rounded-lg object-cover w-full h-full"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
