import React from "react";
import "./footer.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__log">
        Bethlehem Temesgen
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experinces">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__social">
        <a href="https://whatsapp.com" target="_blank">
          <BsWhatsapp />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>

        <a href="https://telegram.com" target="_blank">
          <FaTelegram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Betty's Portfolio. All right reserved.</small>
      </div>
    </footer>
  );
};
export default footer;
