// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

export default function PageWrapper({ title, titleBack, children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <main className="flex-grow container mx-auto p-6 md:px-12 bg-accent-100">
        {title && (
          <div className="relative my-20 text-center">
            {/* Texto decorativo grande en el fondo */}
            <h2 className="absolute inset-0 text-4xl md:text-8xl font-black font-sans opacity-5 pointer-events-none select-none flex items-center justify-center">
              {titleBack}
            </h2>

            {/* Título principal */}
            <h1 className="relative text-5xl md:text-6xl font-bold font-handwriting text-primary-500">
              {title}
            </h1>
          </div>
        )}

        <div>{children}</div>
      </main>
    </motion.div>
  );
}
