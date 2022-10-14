import React from "react";
import "./about.css";
import ME from "../../asset/portfiolo.jpg";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Experience</h5>
              <small>1 Years Working</small>
            </article>

            <article className="about__card">
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <h5>Project</h5>
              <small>10+ Project</small>
            </article>
          </div>
          <p>
            My Name is Bethlehem Temesgen I am from Ethiopia I have a BSC degree
            in computer science I have been working in bitapps technology
            company for almost one year. through out my stay I have participated
            in making different websites with the following technologies HTML,
            CSS, Bootstrap JavaScript ,jQuery, GitHub , React , WordPress ,PHP
            Laravel , MySQL, SQL . I would like to be part of this great
            company. I'm dedicated to work under pressure. and I'm eager to be
            challenged in order to grow and further improve my skills. My
            greatest passion is in life is using my technical know-how to
            benefit other people and organization.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
