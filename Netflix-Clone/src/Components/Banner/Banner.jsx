import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import "./Banner.css";

const strangerThings = {
  id: 1,
  title: "Stranger Things",
  overview:
    "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
  backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
  trailerUrl: "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1",
};

function Banner() {
  const [bannerMovie] = useState(strangerThings);
  const [myList, setMyList] = useState([]);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => setPlaying(true);
  const handleCloseTrailer = () => setPlaying(false);

  const handleMyList = () => {
    if (myList.includes(bannerMovie.id)) {
      setMyList(myList.filter((id) => id !== bannerMovie.id));
    } else {
      setMyList([...myList, bannerMovie.id]);
    }
  };

  const isInList = myList.includes(bannerMovie.id);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`,
      }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1 className="banner-title">{bannerMovie.title}</h1>

        <div className="banner-buttons">
          <button className="btn btn-play" onClick={handlePlay}>
            <FaPlay size={28} /> Play
          </button>

          <button className="btn btn-list" onClick={handleMyList}>
            {isInList ? (
              <>
                <AiOutlineCheck size={28} /> Added
              </>
            ) : (
              <>
                <AiOutlinePlus size={28} /> My List
              </>
            )}
          </button>
        </div>

        <p className="banner-description">{bannerMovie.overview}</p>
      </div>

      {playing && (
        <div className="trailer-overlay" onClick={handleCloseTrailer}>
          <iframe
            width="100%"
            height="100%"
            src={bannerMovie.trailerUrl}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <button className="close-btn" onClick={handleCloseTrailer}>
            ✖
          </button>
        </div>
      )}

      <div className="banner-bottom-gradient"></div>
    </header>
  );
}

export default Banner;
