import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
export default function Experience() {
  return (
    <section id="experinces">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Nextjs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Vuejs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
           
           
          </div>
        </div>

        {/*end of frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Nextjs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Prisam</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Laravel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>CMS & E-Commerce </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>WordPress </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Shopify </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>WooCommerce </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3> Project Management & Collaboration
          </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>Git & Version Control </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
              <h4> Jira, Trello, Notion </h4> 
             <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
              <h4> Google Analytics & SEO   </h4> 
             <small className="text-light">Experienced</small>
              </div>
            </article>
         
          </div>
        </div>

      </div>

    </section>
  );
}
