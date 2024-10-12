import React from "react";
import "./Industries.css";

const Industries = () => {
  return (
    <section className="industries-wrapper">
      <div className="inner-industries">
        <h1>INDUSTRIES SERVED</h1>
        <div className="industry-container">
          <div className="industry-one">
            <div className="industry-img">
              <img src="/aerospace.webp" alt="aero" />
            </div>
            <div className="industry-text">
              <h2>AEROSPACE / DEFENSE</h2>
              <span>Aerospace</span>
              <span>Defense Contractors</span>
              <span>Military Hardware & Equipment</span>
              <span>Military Vehicles</span>
            </div>
          </div>
          <div className="industry-one">
            <div className="industry-img">
              <img src="/automotive.webp" alt="aero" />
            </div>
            <div className="industry-text">
              <h2>AUTOMOTIVE</h2>
              <span>Carbon Fibre</span>
              <span>Racing Hardware</span>
            </div>
          </div>
          <div className="industry-one">
            <div className="industry-img">
              <img src="/marine.webp" alt="aero" />
            </div>
            <div className="industry-text">
              <h2>MARINE</h2>
              <span>Boat Building</span>
              <span>Marine Hinges</span>
              <span>Marine Hardware Distributors</span>
              <span>Marine Dock Units</span>
            </div>
          </div>
          <div className="industry-one">
            <div className="industry-img">
              <img src="/industrial.webp" alt="aero" />
            </div>
            <div className="industry-text">
              <h2>INDUSTRIAL</h2>
              <span>Construction Machinery / Equipment</span>
              <span>Container</span>
              <span>Agriculture Equipment</span>
              <span>Industrial Door</span>
              <span>OEM Products</span>
              <span>Manufacturing Equipment</span>
              <span>Refrigeration Hardware</span>
              <span>Trailer Manufacturing</span>
              <span>Electrical System Enclosures</span>
            </div>
          </div>
          <div className="industry-one">
            <div className="industry-img">
              <img src="/standard.webp" alt="aero" />
            </div>
            <div className="industry-text">
              <h2>STANDARD HINGES</h2>
              <span>Fence & Gate Hardware</span>
              <span>Postal Box</span>
              <span>Hardware Distributors</span>
              <span>HVAC Equipment</span>
              <span>Home Hardware</span>
              <span>Security Hardware</span>
              <span>Storm Door & Shutter</span>
            </div>
          </div>
          <div className="industry-one">
            <div className="industry-img">
              <img src="/special.webp" alt="aero" />
            </div>
            <div className="industry-text">
              <h2>SPECIAL</h2>
              <span>Golf Cart</span>
              <span>Drone Components</span>
              <span>Gaming</span>
              <span>Medical Hardware & Equipment</span>
              <span>Restaurant Equipment</span>
              <span>Car Wash Components</span>
              <span>Audio Equipment</span>
              <span>Display Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
