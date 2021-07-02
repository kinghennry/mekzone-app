import "./aboutsix.css";

import React from "react";

import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import "./aboutsix.css";
import shape from "../../images/shape-animation/about-shape-1.png";
import { Progress } from "reactstrap";

const AboutFive = ({
  aboutFour,
  aboutThree,
  title,
  text,
  desc,
  route,
  link,
}) => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="about__section">
      <div className="about__sectionRow flex">
        <div
          className="about__imageArea flex aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="about__image three">
            <Tilt scale={scale} transitionSpeed={4000}>
              <img src={aboutFour} alt="aboutThree" />
            </Tilt>
          </div>
          <div className="about__image four">
            <Tilt scale={scale} transitionSpeed={4000}>
              <img src={aboutThree} alt="aboutThree" />
            </Tilt>
          </div>
        </div>
        <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="1" style={{ display: "none" }}>
            {/* <img src={shape} alt="shape" /> */}
          </span>
        </div>
        <div
          className="about__contentArea aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="span__title grey-p">{title}</span>

          <h3 className="header-font">{desc}</h3>

          <div className="progress-bar--one">
            <div className="progress__charts">
              <h6 className="heading ">UX Design</h6>
              <div className="single-progress">
                <Progress barClassName="gradient-1" value="81">
                  <span className="percent__label">81%</span>
                </Progress>
              </div>
            </div>

            <div className="progress__charts ">
              <h6 className="heading ">Marketing</h6>
              <div className="single-progress">
                <Progress barClassName="gradient-2 progress__bar" value="72">
                  <span className="percent__label">72%</span>
                </Progress>
              </div>
            </div>

            <div className="progress__charts ">
              <h6 className="heading ">Web Design</h6>
              <div className="single-progress">
                <Progress barClassName="gradient-3" value="81">
                  <span className="percent__label">81%</span>
                </Progress>
              </div>
            </div>

            <div className="progress__charts ">
              <h6 className="heading ">Development</h6>
              <div className="single-progress">
                <Progress barClassName="gradient-4 progress__bar" value="81">
                  <span className="percent__label">81%</span>
                </Progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
