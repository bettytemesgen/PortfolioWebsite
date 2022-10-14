import React from "react";
import "./navs.css";
import { useState } from "react";
const Navs = () => {
  const { activeNav, setActiveNav } = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        About
      </a>
      <a
        href="#experinces"
        onClick={() => setActiveNav("#experinces")}
        className={activeNav === "#experinces" ? "active" : ""}
      >
        Experinces
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#services" ? "active" : ""}
      >
        Portfolio
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navs;
