// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import PlaceCard from "./PlaceCard";

const LodgingSection = ({ section, description, places }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 150, damping: 18 }}
      className="bg-white p-10 rounded-3xl shadow-xl space-y-8"
    >
      <div>
        <h2 className="text-2xl font-extrabold mb-4 text-center text-primary-600">
          {section}
        </h2>
        {description && (
          <p className="text-gray-600 text-center text-md max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </motion.div>
  );
};
export default LodgingSection;
