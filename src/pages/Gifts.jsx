import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import foto1 from "../assets/elements/foto1.png";
import foto2 from "../assets/elements/foto3.jpg";
import foto4 from "../assets/elements/foto4.jpg";
import foto5 from "../assets/couple-photos/MYN-42.webp";
import foto6 from "../assets/couple-photos/MYN-59.webp";
import foto3 from "../assets/couple-photos/MYN-73.webp";

const photos = [
  { src: foto3, alt: "Momento especial 6" },
  { src: foto1, alt: "Momento especial 1" },
  { src: foto2, alt: "Momento especial 2" },
  { src: foto4, alt: "Momento especial 3" },
  { src: foto5, alt: "Momento especial 4" },
  { src: foto6, alt: "Momento especial 5" },
];

export default function Gifts() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper title="Regalos de Bodas" titleBack="Regalos">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12">
        {/* 💬 Mensaje principal */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            🎁 Con Cariño
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tu presencia en nuestra boda es nuestro mayor regalo. Sin embargo,
            si deseas sorprendernos con un detalle adicional, agradecemos
            muchísimo cualquier aporte que nos ayudará a comenzar esta nueva
            etapa juntos. ¡Gracias por tu cariño y apoyo!
          </p>
        </motion.div>

        {/* 💵 Detalles bancarios */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            💌 Aportes Monetarios
          </h2>
          <p className="text-lg text-gray-700">
            Si prefieres realizar un aporte monetario por algún medio digital,
            puedes utilizar las siguientes cuentas:
          </p>
          <ul className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <li>
              <strong>🟢 Banco Nacional:</strong>
              <br />
              IBAN: CR00 0000 0000 0000 0000 00
              <br />
              Titular: Nombre Completo
            </li>
            <li>
              <strong>🔵 Banco de Costa Rica:</strong>
              <br />
              IBAN: CR00 0000 0000 0000 0000 00
              <br />
              Titular: Nombre Completo
            </li>
            <li>
              <strong>📱 SINPE Móvil:</strong>
              <br />
              Número: +506 0000 0000
            </li>
          </ul>
        </motion.div>

        {/* 📸 Carrusel de fotos */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-6 flex flex-col items-center"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            📸 Nuestros Momentos
          </h2>

          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100">
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
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
