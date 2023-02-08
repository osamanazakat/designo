import React from "react";
import "./services-hero.scss";

function ServicesHero({ heading, par }) {
  return (
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__par">{par}</p>
      </div>
    </section>
  );
}

export default ServicesHero;
