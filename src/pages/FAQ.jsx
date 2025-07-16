import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import PageWrapper from "../components/Layout/PageWrapper";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const { lang } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const faqs = t("faq.faqs", { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageWrapper title={t("faq.title")} titleBack="FAQ">
      <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`bg-white shadow-2xl rounded-2xl overflow-hidden transition-all ${
              openIndex === index ? "border-l-4 border-primary-500" : ""
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-lg font-extrabold text-primary-500 focus:outline-none"
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-2xl"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 pb-6 text-dark-500"
                >
                  <p>{faq.answer}</p>
                  {(faq.link || faq.link2) && (
                    <div className="flex gap-10 mt-2">
                      {faq.link && (
                        <Link
                          to={faq.link}
                          className="text-primary-500 font-bold underline block"
                        >
                          {faq.linkText}
                        </Link>
                      )}
                      {faq.link2 && (
                        <Link
                          to={faq.link2}
                          className="text-primary-500 font-bold underline block"
                        >
                          {faq.link2Text}
                        </Link>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
