import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1nw1fzh",
        "template_82dm4a1",
        form.current,
        "BY_2AH4MiI3dZSty3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact-option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bettytemesgen0@gmail.com</h5>
            <a href="mailto:bettytemsgen0@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <FiPhoneCall className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>(251)910015422</h5>
            <a href="callto:(251)910015422" target="_blank">
              Call me
            </a>
          </article>
          <article className="contact-option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a
              href="https://api.whatsapp.com/send?phone+251910015422"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
