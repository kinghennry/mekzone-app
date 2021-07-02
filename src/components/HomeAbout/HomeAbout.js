import React from "react";
import CenterInfo from "../../container/CenterInfo/CenterInfo";
import AboutFive from "../../container/AboutFive/AboutFive";
import aboutThree from "../../images/about/home-one-about/home_agency_about_1.jpg";
import aboutFour from "../../images/about/home-one-about/home_agency_about_2.jpg";
export default function HomeAbout() {
  return (
    <section className="home__about">
      <div className="container px">
        <CenterInfo
          title="We are a full-service creative agency"
          text=" Our team of designers, developers and creatives are perfectionists who
        love what they do and love where they work"
        />
        <AboutFive
          aboutThree={aboutThree}
          aboutFour={aboutFour}
          title="Every day brings new challenges"
          text="We’re boldly individual, always original and refreshingly easy-going. Our vision, passion and ideas are matched with focus, expertise and flair."
          desc="Creative agency focused on vision, product and people."
          route="/about"
          link="About Us"
        />
      </div>
    </section>
  );
}
