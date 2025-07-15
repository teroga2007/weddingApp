import fiesta from "../assets/places/fiesta.jpg";
import caguya from "../assets/places/cayuga.jpg";
import riomar from "../assets/places/riomar.jpg";
import yolymar from "../assets/places/yolymar.jpg";
import caldera2 from "../assets/places/caldera2.jpg";
import confort from "../assets/places/comfort.jpg";

const places = [
  {
    section: "Recomendación de Alojamiento",
    description:
      "Se recomienda buscarlos en el sitio oficial de cada hotel o en plataformas como Booking.com o Airbnb.",
    places: [
      {
        name: "Fiesta Resort – Todo Incluido",
        address: "📍 El Roble, Puntarenas (a 2 minutos del lugar de la boda)",
        description:
          "Resort frente al mar con múltiples piscinas, restaurantes, bares y actividades recreativas. Ideal para quienes desean una experiencia todo incluido.",
        price:
          "💰 Desde 100.000 CRC por persona por noche (aproximadamente).",
        image: fiesta
      },
      {
        name: "Hotel Cayuga",
        address: "📍 Puntarenas centro (a 15 minutos del lugar de la boda)",
        description:
          "Hotel moderno con piscina, desayuno incluido y habitaciones con aire acondicionado. A pocos pasos de la playa y el Parque Marino del Pacífico.",
        price:
          "💰 Desde 30.000 CRC por persona por noche (tarifas mejores si se comparte habitación con 1 o 2 personas).",
        image: caguya
      },
      {
        name: "Hotel Río Mar",
        address: "📍 Puntarenas (a 15 minutos del lugar de la boda)",
        description:
          "Hotel con piscina al aire libre, jardines y habitaciones con aire acondicionado. Muy cerca de la playa Boca Barranca.",
        price: "💰 Desde 30.000 CRC por habitación doble por noche.",
        image: riomar
      },
      {
        name: "Cabinas Yolymar",
        address: "📍 Puntarenas (a 15 minutos del lugar de la boda)",
        description:
          "Cabinas sencillas con jardín, zona para relajarse y mini jacuzzi. Opción económica para grupos pequeños o parejas.",
        price: "💰 Desde 20.000 CRC por habitación doble por noche.",
        image: yolymar
      },
      {
        name: "Cabinas Caldera 2",
        address: "📍 El Roble, Puntarenas (a 2 minutos del lugar de la boda)",
        description:
          "Alojamiento familiar con habitaciones sencillas para hasta 7 personas. Incluye cocina equipada, piscina y área de BBQ.",
        price: "💰 Ronda los 85.000 CRC por noche para grupos de 7 personas.",
        image: caldera2
      },
      {
        name: "Cabinas Confort",
        address: "📍 Barrio El Carmen (a 20 minutos del lugar de la boda)",
        description:
          "Hasta 8 habitaciones cómodas, seguras. Incluye piscina y otras amenidades.",
        price: "💰 Desde 30.000 por pareja.",
        image: confort
      }
    ]
  }
];

export { places };