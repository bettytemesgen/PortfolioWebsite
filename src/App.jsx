import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import Navs from "./components/navs/Navs";
import { About } from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <>
      <Header />
      <Navs />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
