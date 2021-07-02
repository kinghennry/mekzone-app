import React from "react";
import skillOne from "../../images/skill/skill-1.jpg";
import skillTwo from "../../images/skill/skill-2.jpg";
import AboutSix from "../../container/AboutSix/AboutSix";
export default function SkillSet() {
  return (
    <section className="skill">
      <div className="container px">
        <AboutSix
          aboutThree={skillOne}
          aboutFour={skillTwo}
          title="Your success is our success"
          desc="Web design, marketing & SEO solutions that get results"
        />
      </div>
    </section>
  );
}
