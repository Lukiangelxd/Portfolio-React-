// import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const iconSize = 40;

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px 0",
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        <ul className="list-unstyled d-flex">
          <li className="logo">
            <a href="https://github.com/grosario1" className="text-white mx-2">
              <VscGithubAlt size={iconSize} />
            </a>
          </li>
          <li className="logo">
            <a href="https://www.linkedin.com/in/gilberto-rosario-8955868" className="text-white mx-2">
              <AiOutlineLinkedin size={iconSize} />
            </a>
          </li>
          <li className="logo">
            <a href="https://www.instagram.com/yourinstagramprofile" className="text-white mx-2">
              <FaInstagram size={iconSize} />
            </a>
          </li>
          <li className="logo">
            <a href="https://twitter.com/yourtwitterprofile" className="text-white mx-2">
              <BsTwitter size={iconSize} />
            </a>
          </li>
          <li className="logo">
            <a href="mailto:gilberto.rosario@rocketmail.com" className="text-white mx-2">
              <FiMail size={iconSize} />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center p-1">
        © {new Date().getFullYear()} Site created by HM
      </div>
    </footer>
  );
}

export default Footer;