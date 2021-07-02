import React from "react";
import "./skill.css";
import skillOne from "../../images/skill/skill-1.jpg";
import skillTwo from "../../images/skill/skill-2.jpg";
import AboutSix from "../../container/AboutSix/AboutSix";

export default function Skill() {
  return (
    <section className="skill">
      <div className="container px">
        <AboutSix
          aboutThree={skillOne}
          aboutFour={skillTwo}
          title="Brand-first creative services"
          desc="Bringing unique and engaging experiences to your brand"
        />
      </div>
    </section>
  );
}
