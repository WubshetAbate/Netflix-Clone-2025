import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieList from "./Components/MovieList"; // rename this to moviesData.js if it's an array
import "./App.css";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
