import React from "react";
import aboutThree from "../../images/about/about-1.jpg";
import aboutFour from "../../images/about/about-2.jpg";
import Rating from "../../container/Rating/Rating";
export default function AboutRating() {
  return (
    <section className="about__rating">
      <div className="container px">
        <Rating
          aboutThree={aboutThree}
          aboutFour={aboutFour}
          title="Web design and digital marketing"
          desc="We think strategy, UX design, and web developments."
          reverse="reverse"
          left="left"
        />
      </div>
    </section>
  );
}
