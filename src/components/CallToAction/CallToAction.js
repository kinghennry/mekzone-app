import React, { useEffect, useRef } from "react";
import "./cta.css";
import { Link } from "react-router-dom";
import shapeAnimation from "../../images/shape-animation/newsletter-shape.png";
import Parallax from "parallax-js";

export default function CallToAction() {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <section className="newsletter flex align justify-ct text-ct">
      <div className="container px">
        <div className="cta__content">
          <h1>Let’s find out how to work together</h1>
          <p>
            Ready to start your project? The contact information collected
            through this form will only be used to send a response to your
            inquiry.
          </p>
        </div>
        <Link
          to="/"
          className="newsletter__btn aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Get Started
        </Link>
        <div
          className="shape shape-1"
          id="scene"
          className="hover__img"
          ref={sceneEl}
        >
          <span data-depth="1">
            {/* <img src={shapeAnimation} alt="shapeAnimation" /> */}
          </span>
        </div>
      </div>
    </section>
  );
}
