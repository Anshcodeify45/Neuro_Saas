import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div
      className="
        w-full
        overflow-x-hidden
        bg-white
      "
    >

      {/* NAVBAR */}
      <header className="w-full">

        <Navbar />

      </header>

      {/* HERO */}
      <main className="w-full">

        <section
          id="home"
          className="
            w-full
            scroll-mt-24
          "
        >

          <Hero />

        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="
            w-full
            scroll-mt-24
          "
        >

          <Features />

        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="
            w-full
            scroll-mt-24
          "
        >

          <Pricing />

        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="
            w-full
            scroll-mt-24
          "
        >

          <Contact />

        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full">

        <Footer />

      </footer>

    </div>
  );
};

export default Home;