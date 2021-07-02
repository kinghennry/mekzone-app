import React from "react";
import AboutFive from "../../container/AboutFive/AboutFive";
import aboutThree from "../../images/about/about-3.jpg";
import aboutFour from "../../images/about/about-4.jpg";

export default function WorkSection() {
  return (
    <section className="work__section">
      <div className="container px">
        <AboutFive
          aboutThree={aboutThree}
          aboutFour={aboutFour}
          title="Our solutions begin with brand research"
          text="Our team of designers and developers are perfectionists who love what they do – we thrive off pushing the boundaries of our clients’ expectations and our own capabilities.."
          desc="We’ve worked alongside plenty of brands & startups."
          route="/contact"
          link="Get Started"
        />
      </div>
    </section>
  );
}
