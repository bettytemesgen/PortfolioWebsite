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
    name: "Betty",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius metus, amet non mattis commodo. Ornare commodo,",
  },
  {
    avater: ME,
    name: "Betty",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius metus, amet non mattis commodo. Ornare commodo, .",
  },
  {
    avater: ME,
    name: "Betty",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius metus, amet non mattis commodo. Ornare commodo,",
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
