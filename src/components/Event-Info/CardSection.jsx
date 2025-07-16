// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function CardSection({ children }) {
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 160, damping: 20 }}
    className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden"
  >
    {children}
  </motion.div>;
}
