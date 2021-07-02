import React from "react";
import CenterInfo from "../CenterInfo/CenterInfo";
import { Link } from "react-router-dom";
import "./calltoaction.css";
export default function CallToAction() {
  return (
    <section className="cta__section">
      <div className="container px rt">
        <div className="cta__details">
          <CenterInfo
            headingOption="fz-34"
            title="Let's talk about your project and see how we can work together"
            text="Our team of designers, developers and creatives are perfectionists
                    who love what they do and love where they work"
            nt="nt"
          />
          <center>
            <Link
              className="cta__link"
              data-aos="fade-up"
              data-aos-delay="300"
              to="/contact"
            >
              Contact Us
            </Link>
          </center>
          <div className="shape shape-1">
            <img src={"images/icon-animation/icon-1.png"} alt="" />
          </div>
          <div className="shape shape-2">
            <img src={"images/icon-animation/icon-2.png"} alt="" />
          </div>
          <div className="shape shape-3">
            <img src={"images/icon-animation/icon-3.png"} alt="" />
          </div>
          <div className="shape shape-4">
            <img src={"images/icon-animation/icon-4.png"} alt="" />
          </div>
          <div className="shape shape-5">
            <img src={"images/icon-animation/icon-5.png"} alt="" />
          </div>
          <div className="shape shape-6">
            <img src={"images/icon-animation/icon-6.png"} alt="" />
          </div>
          <div className="shape shape-7">
            <img src={"images/icon-animation/icon-7.png"} alt="" />
          </div>
          <div className="shape shape-8">
            <img src={"images/icon-animation/icon-8.png"} alt="" />
          </div>
          <div className="shape shape-9">
            <img src={"images/icon-animation/icon-9.png"} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
