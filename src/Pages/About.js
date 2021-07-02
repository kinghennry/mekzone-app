import React from "react";
import SEO from "../components/SEO/SEO";
import aboutImg from "../images/bg/breadcrumb-bg.jpg";
import Nav from "../components/Nav/Nav";
import WorkSection from "../components/WorkSection/WorkSection";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/Footer/Footer";
import AboutRating from "../components/AboutRating/AboutRating";
import TestemonialContainer from "../container/TestimonialContainer/TestimonialContainer";
import CallToAction from "../container/CallToAction/CallToAction";

export default function About() {
  return (
    <React.Fragment>
      <SEO title="Mekzone || About" />
      <Nav />
      <Breadcrumb
        image={aboutImg}
        title="We are an agency located in New York"
        content="Home"
        contentTwo="About Us"
      />
      <AboutRating />
      <TestemonialContainer />
      <WorkSection />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}
