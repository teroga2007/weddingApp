import { useEffect, useRef, useState } from "react";

const PinterestEmbed = ({ fallbackImages = [] }) => {
  const pinterestRef = useRef(null);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.pinterest.com/js/pinit.js";
    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      if (pinterestRef.current?.offsetHeight < 100) {
        setLoaded(false);
      }
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="md:w-1/2 h-full p-4 flex flex-col justify-center"
      ref={pinterestRef}
    >
      {loaded ? (
        <a
          data-pin-do="embedBoard"
          data-pin-board-width="400"
          data-pin-scale-height="200"
          data-pin-scale-width="80"
          href="https://www.pinterest.com/ter0ga/c%C3%B3digo-de-vestimenta-formal-tropical/"
        />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {fallbackImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`inspo-${i}`}
              className="rounded-lg object-cover w-full h-full"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PinterestEmbed;
