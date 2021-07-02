import React from "react";
import SEO from "../components/SEO/SEO";
import Nav from "../components/Nav/Nav";
import workImg from "../images/bg/breadcrumb-bg-two.jpg";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import Footer from "../components/Footer/Footer";
import WorkSection from "../components/WorkSection/WorkSection";
import WorkContainer from "../container/Work/WorkContainer";
import CallToAction from "../components/CallToAction/CallToAction";
import Faq from "../components/Faq/Faq";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Work() {
  return (
    <React.Fragment>
      <SEO title="Mekzone || Work" />
      <Nav />
      <Breadcrumb
        image={workImg}
        title="We work with bold brands that we believe in"
        content="Home"
        contentTwo="Work"
      />
      <WorkContainer />
      <CallToAction />
      <WorkSection />
      <Faq />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}
