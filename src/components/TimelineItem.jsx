import { motion } from "framer-motion";

const TimelineItem = ({ date, title, description, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <li className="relative w-full mb-12 flex flex-col md:flex-row">
      {/* Línea vertical central */}
      <div className="absolute top-0 left-[30px] md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>

      {/* Círculo con imagen */}
      <div
        className={`
          w-[60px] h-[60px] rounded-full bg-cover bg-center border-4 border-primary-500 z-10
          absolute left-[0.5rem] md:left-1/2 md:-translate-x-1/2
        `}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Panel con animación */}
      <motion.div
        className={`
          mt-16 md:mt-0 md:w-1/2 px-15
          ${
            isEven
              ? "md:pr-1 md:ml-auto text-right"
              : "md:pl-1 md:mr-auto text-left"
          }
        `}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-white shadow-md rounded-lg p-6 relative z-10">
          <div className="text-sm text-gray-500 mb-1">{date}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </motion.div>
    </li>
  );
};

export default TimelineItem;
