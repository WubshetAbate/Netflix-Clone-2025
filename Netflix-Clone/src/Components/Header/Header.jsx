import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import netflixLogo from "../../Asset/images/Logonetflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  return (
    <header>
      <img
        src={netflixLogo}
        alt="Netflix Logo"
        style={{ width: "130px", height: "auto" }}
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/latest">Latest</Link>
        <Link to="/mylist">My List</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <ul>
          <li><SearchIcon /></li>
          <li><NotificationsIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
        </ul>
      </div>
    </header>
  );
}
