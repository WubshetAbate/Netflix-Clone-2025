import React, { useEffect, useState } from "react";

function MovieList() {
  const [genres, setGenres] = useState([]);
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  // Fetch all genres dynamically
  const getGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=4be2412ecd340329baddaf55fcf9ec0a`
    );
    const json = await res.json();
    setGenres(json.genres);
  };

  // Fetch multiple pages of movies for a genre
  const getMoviesByCategory = async (genreId) => {
    let allMovies = [];
    for (let page = 1; page <= 3; page++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=4be2412ecd340329baddaf55fcf9ec0a&with_genres=${genreId}&page=${page}`
      );
      const json = await res.json();
      allMovies = [...allMovies, ...json.results];
    }
    return allMovies;
  };

  // Fetch trailer for a movie
  const getTrailer = async (movieId) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=4be2412ecd340329baddaf55fcf9ec0a`
      );
      const json = await res.json();
      const trailer = json.results.find((vid) => vid.type === "Trailer");
      if (trailer) {
        setSelectedTrailer(`https://www.youtube.com/embed/${trailer.key}`);
      } else {
        alert("No trailer available for this movie.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Load genres first
  useEffect(() => {
    getGenres();
  }, []);

  // After genres load, fetch movies for each genre
  useEffect(() => {
    const fetchAllMovies = async () => {
      const data = {};
      for (let genre of genres) {
        data[genre.name] = await getMoviesByCategory(genre.id);
      }
      setMoviesByCategory(data);
    };
    if (genres.length > 0) fetchAllMovies();
  }, [genres]);

  return (
    <div style={{ padding: "20px" }}>
      {/* Categories + Movies */}
      {Object.keys(moviesByCategory).map((category, index) => (
        <div key={index} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#fff", marginBottom: "10px" }}>{category}</h2>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "10px",
              paddingBottom: "10px",
            }}
          >
            {moviesByCategory[category].map((movie) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => getTrailer(movie.id)} // ✅ play on click
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  style={{
                    width: "200px",
                    height: "300px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Trailer Modal */}
      {selectedTrailer && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setSelectedTrailer(null)} // close modal
        >
          <iframe
            width="800"
            height="450"
            src={selectedTrailer}
            title="Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieList;
