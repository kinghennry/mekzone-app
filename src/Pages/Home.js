import React from "react";
import SEO from "../components/SEO/SEO";
import Nav from "../components/Nav/Nav";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Hero from "../container/Hero/Hero";
import Footer from "../components/Footer/Footer";
import ContactInformation from "../components/ContactInformation/ContactInfo";
import HomeAbout from "../components/HomeAbout/HomeAbout";
import Portfolio from "../components/Portfolio/Portfolio";
import Faq from "../components/Faq/Faq";
import SkillSet from "../components/SkillSet/SkillSet";
import FunFact from "../container/FunFact/FunFact";
import HomeService from "../components/HomeService/HomeService";
import TestimonialContainer from "../container/TestimonialContainer/TestimonialContainer";
export default function Home() {
  return (
    <React.Fragment>
      <SEO title="MekZone Technology Service Pvt Ltd" />
      <Nav />
      <Hero />
      <HomeAbout />
      <FunFact />
      <HomeService />
      <SkillSet />
      <Portfolio />
      <TestimonialContainer />
      <Faq />
      <ContactInformation />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}
