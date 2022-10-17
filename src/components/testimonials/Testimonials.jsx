import React from "react";
import "./testimonials.css";
import ME from "../../asset/code1.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
const data = [
  {
    avater: ME,
    name: "Mr Isaac ",
    review:
      "Thank you  for your hard work for everything I wished for.Our website is running outstanding without any problem of loading.I'm very happy with my exceptional website in its design and content into it. ",
  },
  {
    avater: ME,
    name: "Mr Zelmy",
    review:
      "Your designs were exactly what we had always imagined,clear,clean,continuous with a focus on stylistic, element. Thank you so much for your work on this project.It was a major help for us.",
  },
  {
    avater: ME,
    name: "Mr Yarde",
    review:
      "It has been a pleasure to work with you, to create a website for our Company which is working well. They met tight timetables and were always responsive to ideas and requests.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avater, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avater">
                <img src={avater} alt="manager" />
              </div>
              <h5 className="client__name"> {name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
