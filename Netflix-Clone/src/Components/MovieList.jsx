import React, { useEffect, useState } from "react";

function MovieList() {
  const [genres, setGenres] = useState([]);
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;


  const getGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    const json = await res.json();
    setGenres(json.genres);
  };

  const getMoviesByCategory = async (genreId) => {
    let allMovies = [];
    for (let page = 1; page <= 3; page++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
      );
      const json = await res.json();
      allMovies = [...allMovies, ...json.results];
    }
    const uniqueMovies = Array.from(
      new Map(allMovies.map((m) => [m.id, m])).values()
    );
    return uniqueMovies;
  };

  const getTrailer = async (movieId) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
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

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    const fetchAllMovies = async () => {
      let data = {};
      for (let genre of genres) {
        const movies = await getMoviesByCategory(genre.id);
        data[genre.name] = movies;
      }

       console.log("Dynamic Movies by Category:", JSON.stringify(data, null, 2));
      setMoviesByCategory(data);
    };
    if (genres.length > 0) fetchAllMovies();
  }, [genres]);

  return (
    <div style={{ padding: "20px" }}>
      {Object.keys(moviesByCategory).map((category, index) => (
        <div key={index} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#fff",
              marginBottom: "15px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {category}
          </h2>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              paddingBottom: "10px",
            }}
          >
            {moviesByCategory[category].map((movie) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => getTrailer(movie.id)}
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  minWidth: "220px",
                  transition: "transform 0.3s ease",
                }}
                
              >
                <img
                  src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                  alt={movie.title}
                  style={{
                    width: "220px",
                    height: "330px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{
                    color: "#fff",
                    marginTop: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

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
          onClick={() => setSelectedTrailer(null)}
        >
          <iframe
            width="800"
            height="450"
            src={selectedTrailer}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieList;
