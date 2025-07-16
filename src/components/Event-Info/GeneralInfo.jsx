import InfoCard from "./InfoCard";
import PinterestEmbed from "./PinterestEmbed";
import dresscode from "../../assets/formal-tropical.png";
import img1 from "../../assets/mosaic/img1.jpg";
import img2 from "../../assets/mosaic/img2.png";
import { useTranslation } from "react-i18next";

export default function GeneralInfo({ location, mapEmbed, className }) {
  const { t } = useTranslation();

  return (
    <section className={`space-y-10 ${className}`}>
      {/* Ubicación y mapa */}
      <InfoCard from="primary-100" to="white">
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left bg-gradient-to-br from-primary-100 to-white">
          <h3 className="text-2xl font-extrabold text-primary-600 mb-4">
            {t("details.title")}
          </h3>
          <p className="text-gray-700 text-md mb-1">{location}</p>
          <p className="text-gray-700 text-md mb-1"> {t("details.date")}</p>
          <p className="text-gray-700 text-md"> {t("details.time")}</p>
        </div>

        <div className="md:w-1/2 h-72 md:h-auto">
          <iframe
            src={mapEmbed}
            width="100%"
            height="100%"
            className="w-full h-full"
            loading="lazy"
            style={{ border: 0, borderRadius: "0 1.5rem 1.5rem 0" }}
            title="Mapa del evento"
          />
        </div>
      </InfoCard>

      {/* Dress code + Pinterest */}
      <InfoCard>
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left bg-gradient-to-br from-white to-primary-50">
          <h3 className="text-2xl font-extrabold text-primary-600 mb-4">
            {t("details.dresscode")}
          </h3>
          <p className="text-gray-700 text-md mb-3">{t("details.tropical")}</p>
          <p className="text-sm text-gray-500">
            <a
              className="font-bold text-dark-500 hover:underline cursor-pointer"
              href="https://www.pinterest.com/ter0ga/c%C3%B3digo-de-vestimenta-formal-tropical/"
              target="_blank"
            >
              {t("details.pinterest")}
            </a>
          </p>
          <img
            src={dresscode}
            alt="Formal Tropical example"
            className="w-32 m-auto md:m-0"
            loading="lazy"
          />
        </div>

        <PinterestEmbed fallbackImages={[img1, img2]} />
      </InfoCard>
    </section>
  );
}
