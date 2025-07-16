// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ScheduleItem from "./ScheduleItem";

export default function Schedule({ className = "" }) {
  const { t } = useTranslation();
  const schedule = t("info.schedule.items", { returnObjects: true });

  return (
    <motion.section
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className={`p-10 space-y-6 bg-white shadow-xl rounded-3xl ${className}`}
    >
      <h2 className="text-2xl font-extrabold text-primary-600 text-center mb-6"></h2>
      <ul className="space-y-5">
        {schedule.map((item, index) => (
          <ScheduleItem key={index} time={item.time} activity={item.activity} />
        ))}
      </ul>
    </motion.section>
  );
}
