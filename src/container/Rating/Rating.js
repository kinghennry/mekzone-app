import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./rating.css";
export default function Rating({
  aboutFour,
  aboutThree,
  title,
  desc,
  reverse,
  left,
}) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
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
      <div className={`about__sectionRow flex ${reverse}`}>
        <div
          className="about__imageArea m-down flex aos-init aos-animate"
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
        {/* about__contentArea m-up p-left aos-init aos-animate" */}
        <div
          className={`about__contentArea m-up p-left aos-init aos-animate ${left}`}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="span__title grey-p">{title}</span>

          <h3 className="header-font">{desc}</h3>
          <div className="ratings__grid">
            <div className="ratings">
              <div className="ratings__info">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={didViewCountUp ? 110 : 0} />
                </VisibilitySensor>
                +
              </div>
              <h6 className="ratings__text">Happy Clients</h6>
              <p className="rating__desc gray-p">
                We help our clients increase profits by increasing their
                visibility online.
              </p>
            </div>
            <div className="ratings">
              <div className="ratings__info">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={didViewCountUp ? 130 : 0} />
                </VisibilitySensor>
                +
              </div>
              <h6 className="ratings__text">Completed projects</h6>
              <p className="rating__desc gray-p">
                We help our clients increase profits by increasing their
                visibility online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
