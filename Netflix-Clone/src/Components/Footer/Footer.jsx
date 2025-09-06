import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="#"><FacebookIcon fontSize="medium" /></a>
          <a href="#"><InstagramIcon fontSize="medium" /></a>
          <a href="#"><YouTubeIcon fontSize="medium" /></a>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Legal Notice</a></li>
          </ul>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Cookie Preferences</a></li>
          </ul>
          <ul>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-service">
          <button>Service Code</button>
        </div>
        <p className="footer-copy">&copy; 1997-2025 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
