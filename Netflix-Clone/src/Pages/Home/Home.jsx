import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MovieList from "../../Components/MovieList";

function Home() {
  return (
    <>
      <Header />
      <MovieList /> 
      <Footer />
    </>
  );
}

export default Home;
