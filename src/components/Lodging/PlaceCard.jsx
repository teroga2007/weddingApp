const PlaceCard = ({ place }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {place.image && (
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-primary-500 mb-1">
          {place.name}
        </h3>
        <p className="text-gray-700 text-sm mb-2">{place.address}</p>
        {place.price && (
          <p className="text-gray-800 font-medium mb-2">{place.price}</p>
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
  );
};
export default PlaceCard;
