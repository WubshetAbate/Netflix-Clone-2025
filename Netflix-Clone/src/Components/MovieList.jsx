import React, { useEffect, useState } from "react";

function MovieList() {
  const [genres, setGenres] = useState([]);
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  const getGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=4be2412ecd340329baddaf55fcf9ec0a`
    );
    const json = await res.json();
    setGenres(json.genres);
  };

  const getMoviesByCategory = async (genreId) => {
    let allMovies = [];
    for (let page = 1; page <= 3; page++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=4be2412ecd340329baddaf55fcf9ec0a&with_genres=${genreId}&page=${page}`
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

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    const fetchAllMovies = async () => {
      let data = {};
      for (let genre of genres) {
        const movies = await getMoviesByCategory(genre.id);
        data[genre.name] = shuffleArray(movies);
      }
      const shuffledData = {};
      const shuffledKeys = shuffleArray(Object.keys(data));
      shuffledKeys.forEach((key) => {
        shuffledData[key] = data[key];
      });

      console.log(
        "Dynamic Movies by Category:",
        JSON.stringify(shuffledData, null, 2)
      );
      setMoviesByCategory(shuffledData);
    };
    if (genres.length > 0) fetchAllMovies();
  }, [genres]);

  return (
    <div style={{ padding: "20px" }}>
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
                onClick={() => getTrailer(movie.id)}
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  minWidth: "200px",
                  flexShrink: 0,
                }}
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
                <p
                  style={{
                    color: "#fff",
                    marginTop: "5px",
                    fontSize: "14px",
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
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieList;
