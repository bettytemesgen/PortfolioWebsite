import React from "react";
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

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
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="footer__social">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>

        <a href="https://telegram.com">
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
