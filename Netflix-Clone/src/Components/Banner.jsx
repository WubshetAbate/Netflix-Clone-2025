import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

function Banner() {
  const bannerMovie = {
    title: "Stranger Things",
    name: "Stranger Things",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg", // new image
  };

  return (
    <header
      className="relative h-[90vh] text-white flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "45vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 px-16 pb-40 max-w-3xl">
        <h1 className="text-9xl font-extrabold mb-6 drop-shadow-2xl leading-tight">
          {bannerMovie.title || bannerMovie.name}
        </h1>

        <div className="flex gap-6 mb-6">
          <button className="flex items-center gap-3 bg-white text-black font-bold px-10 py-4 text-2xl rounded-lg hover:bg-gray-300 transition">
            <FaPlay size={48} /> Play
          </button>

          <button className="flex items-center gap-3 bg-black/80 text-white font-bold px-10 py-4 text-2xl rounded-lg hover:bg-black transition">
            <AiOutlinePlus size={48} /> My List
          </button>
        </div>

        <p className="text-lg sm:text-xl max-w-2xl leading-relaxed drop-shadow-md line-clamp-4">
          {bannerMovie.overview}
        </p>
      </div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </header>
  );
}

export default Banner;
