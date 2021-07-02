import React from "react";
import picFive from "../../images/about/about-5.jpg";
import picSix from "../../images/about/about-6.jpg";
import AboutFive from "../../container/AboutFive/AboutFive";
export default function Practical() {
  return (
    <section style={{ padding: "50px 0" }}>
      <div className="container px">
        <AboutFive
          aboutThree={picFive}
          aboutFour={picSix}
          title="Innovative & cutting-edge technology"
          desc="We use latest technologies that are proven and practical"
          text="Our goal is to make the process easier for you. We provide our clients with the right tools for web development, hosting, e-commerce, security, content and marketing."
          link="Get Started"
          route="/"
        />
      </div>
    </section>
  );
}
