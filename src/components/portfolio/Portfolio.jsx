import React from "react";
import "./portfolio.css";
import ME from "../../asset/code1.jpg";
import WEB from "../../asset/web.jpg";

import WEBTW0 from "../../asset/code2.jpg";

import POGRAM from "../../asset/programming.jpg";

import MEfour from "../../asset/portfiolo.jpg";
import MEfive from "../../asset/portfiolo.jpg";

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
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta ">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Github
            </a>
          </div>
        </article>
        {/*====================two========================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEB} alt="web desgin" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta ">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Github
            </a>
          </div>
        </article>
        {/*====================three========================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEBTW0} alt="web desgin" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta ">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Github
            </a>
          </div>
        </article>
        {/*====================three========================== */}

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={POGRAM} alt="web desgin" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta ">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
