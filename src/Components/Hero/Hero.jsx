import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-top">
        <h1>SAMPLE POLICY & PROCEDURE CHANGE</h1>
        <p>Learn more about our policy and procedure change for samples.</p>
      </div>
      <div className="hero-bottom">
        <div className="side-one">
          <iframe
            width="500"
            height="338"
            src="https://www.youtube.com/embed/tyuhWA02uTE"
            title="Welcome to Jefco Manufacturing!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="side-two">
          <p>
            With over five decades of experience, Jefco Manufacturing's
            commitment to precision engineering and craftsmanship shines through
            in every product we offer. Our roots in the marine industry run
            deep, but our offerings extend far beyond. Whether you're in
            construction, defense, automotive, or any sector demanding durable
            solutions, we deliver. Our dedicated team works together to provide
            high quality products at competitive pricing. We offer custom
            manufacturing and fabrication using the most up-to-date machinery,
            tooling, and techniques; as well as keeping a variety of stock
            hinges and gate hardware on hand, so we are prepared to supply
            products quickly and efficiently.
          </p>
          <br />
          <p>
            At Jefco Manufacturing, your satisfaction is our priority, and we
            invite you to experience the finest in product quality and service
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
