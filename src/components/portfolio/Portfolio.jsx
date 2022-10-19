import React from "react";
import "./portfolio.css";
import ME from "../../asset/stpeter.png";
import WEB from "../../asset/bk1.jpg";

import WEBTW0 from "../../asset/Todolist.jpg";

import POGRAM from "../../asset/log.png";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="one" />
          </div>
          <h3>Hospital Website</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://kiduspetroshopital.com/"
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
            <img src={WEB} alt="web desgin" />
          </div>
          <h3>Coffee Website</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://zelmycoffee.com/"
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
            <img src={WEBTW0} alt="web desgin" />
          </div>
          <h3>TodoList in React </h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://bettytemesgen.github.io/ToDo/"
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
          <h3>Travel Website</h3>
          <div className="portfolio__item-cta ">
            <a
              href="https://github.com/bettytemesgen"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://bitappstech.com/travle_with_abrish/"
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
