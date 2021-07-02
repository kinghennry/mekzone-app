import React from "react";
import "./hero.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__row">
          <center className="intro__center">
            <h2 className="intro__title">
              Deliver{" "}
              <Typed
                strings={[" secure ", " well designed ", " best quality "]}
                typeSpeed={100}
                backSpeed={110}
                loop
              />
              web &amp; mobile applications{" "}
            </h2>
            <div className="desc">
              <p>
                We are IT startup company located in Hyderabad. We do software
                design and development for your business.
              </p>
            </div>
            <Link to={"/"} className="intro__link blue">
              Get Started
            </Link>
            <Link to={"/about"} className="intro__link">
              {" "}
              Learn More{" "}
            </Link>
          </center>
        </div>
      </div>
    </section>
  );
}
