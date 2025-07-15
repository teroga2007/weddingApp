import PageWrapper from "../components/PageWrapper";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import preview1 from "../assets/couple-photos/MYN-26.webp";
import preview2 from "../assets/couple-photos/MYN-7.webp";
import preview3 from "../assets/couple-photos/MYN-41.webp";
import preview4 from "../assets/couple-photos/MYN-80.webp";
import preview5 from "../assets/couple-photos/MYN-73.webp";
import preview6 from "../assets/couple-photos/MYN-50.webp";

const previewImages = [
  preview1,
  preview2,
  preview3,
  preview4,
  preview5,
  preview6,
];

export default function Gallery() {
  return (
    <PageWrapper title="Galería de Fotos" titleBack="Fotos">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-10">
        {/* Intro text */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-500">
            ¡Revive y Comparte!
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Hemos creado un álbum colaborativo donde podrás ver todas las fotos
            del evento y subir las tuyas para compartir con todos los invitados.
            📷✨
          </p>
          <a
            href="https://photos.app.goo.gl/sU4YKg6kMUFvGfHg6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl mt-4 shadow-lg transition-all"
          >
            Ir al Álbum en Google Photos
          </a>
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
            >
              <img
                src={img}
                alt={`Vista previa ${idx + 1}`}
                className="w-full h-40 md:h-48 object-cover transition-transform"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Invite to upload */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="text-center text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            ¿Tomaste fotos o videos durante la boda? 🥰 Súbelos al álbum para
            que todos podamos revivir esos momentos especiales juntos.
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
