import React from "react";
import "./about.css";
import ME from "../../asset/pro-img.png";

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
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <h5>Company Project</h5>
              <small>10+ company Project</small>
            </article>

            <article className="about__card">
              <h5>Project</h5>
              <small>20+ Project</small>
            </article>
          </div>
          <p>
            I am a passionate full-stack developer with over three years of
            experience in building scalable and user-friendly web applications.
            Proficient in modern technologies like Next.js, React, .NET, and
            WordPress, I specialize in developing high-performance websites,
            e-commerce platforms, and learning management systems. I have
            successfully contributed to multiple projects, including Palm Jobs,
            BitApps E-learning, and Yenetena. My expertise lies in frontend and
            backend development, API integration, and payment gateways like
            SantimPay. I am always eager to learn and innovate in the tech
            industry
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
