import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MovieList from "../../Components/MovieList";
import Banner from "../../Components/Banner";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MovieList />
      <Footer />
    </>
  );
}

export default Home;
