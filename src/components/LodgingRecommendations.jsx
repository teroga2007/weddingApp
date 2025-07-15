// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function LodgingRecommendations({ data }) {
  return (
    <motion.section
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 150, damping: 18 }}
      className="space-y-14"
    >
      {data.map((section, idx) => (
        <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-extrabold mb-4 text-center text-primary-600">
            {section.section}
          </h2>
          {section.description && (
            <p className="text-gray-600 mb-8 text-center text-md max-w-2xl mx-auto">
              {section.description}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.places.map((place, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {place.image && (
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary-600 mb-1">
                    {place.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">{place.address}</p>
                  {place.price && (
                    <p className="text-gray-800 font-medium mb-2">
                      {place.price}
                    </p>
                  )}
                  {place.link && (
                    <a
                      href={place.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary-500 text-sm font-semibold underline mt-auto"
                    >
                      Ver más
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}
