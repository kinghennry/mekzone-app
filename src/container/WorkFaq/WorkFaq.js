import { useState, useEffect, useRef } from "react";
import shape from "../../images/shape-animation/about-shape-1.png";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import Accordion from "../Accordion/Accordion";
import data from "../../data/Faq/faqs";

export default function WorkFaq({ aboutFour, aboutThree, title, desc }) {
  const [questions, setQuestions] = useState(data);
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
          <span data-depth="1">
            <img style={{ display: "none" }} src={shape} alt="shape" />
          </span>
        </div>{" "}
        <div
          className="about__contentArea aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="span__title grey-p">{title}</span>
          <h3 className="header-font">{desc}</h3>
          <div className="faq__details">
            {questions.map((question) => {
              return <Accordion key={question.id} {...question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
