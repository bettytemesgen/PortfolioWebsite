import React from "react";
import "./portfolio.css";
import yenetena from "../../asset/yenetena.jpg";
import markab from "../../asset/markab.jpg";

import Bitapps from "../../asset/bitapps.jpg";

import POGRAM from "../../asset/tewos.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={yenetena} alt="one" />
          </div>
          <h3>YeneTena</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://www.yenetena.com//"
              target="_blank"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </article>
        {/*====================two========================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={markab} alt="web desgin" />
          </div>
          <h3>Markab Solutions</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://markabsolutionseth.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </article>
        {/*====================three========================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Bitapps} alt="web desgin" />
          </div>
          <h3>Bitapps Learning Managment System(LMS) </h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://elearning.bitappstech.com/"
              target="_blank"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </article>
        {/*====================three========================== */}

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={POGRAM} alt="web desgin" />
          </div>
          <h3>Tewos Technology Company</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://tewostech.com/"
              target="_blank"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
