import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

