// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Schedule({ events, className }) {
  return (
    <motion.section
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className={`p-10 space-y-6 bg-white shadow-xl rounded-3xl ${className}`}
    >
      <h2 className="text-2xl font-extrabold text-primary-600 text-center mb-6">
        Cronograma del Día
      </h2>
      <ul className="space-y-5">
        {events.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row md:justify-between items-center gap-2 border-b pb-4 border-secondary-200 last:border-0"
          >
            <span className="text-primary-500 font-semibold text-lg md:text-xl w-40 text-center md:text-left">
              {item.time}
            </span>
            <span className="text-gray-800 text-base md:text-lg text-center md:text-left">
              {item.activity}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
