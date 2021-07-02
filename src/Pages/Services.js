import React from "react";
import serviceImg from "../images/bg/breadcrumb-bg-three.jpg";
import Nav from "../components/Nav/Nav";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import ServiceDetail from "../container/ServiceDetail/ServiceDetail";
import Practical from "../components/Practical/Practical";
import Skill from "../components/Skill/Skill";
import FunFact from "../container/FunFact/FunFact";
import WorkData from "../data/work/workDetails";

export default function Services() {
  return (
    <React.Fragment>
      <SEO title="Mekzone || Service" />
      <Nav />
      <Breadcrumb
        image={serviceImg}
        title="We work with bold brands that we believe in"
        content="Home"
        contentTwo="Services"
      />
      <ServiceDetail />
      <Skill />
      <Practical />
      <FunFact title="We help our clients solve business problems, increase visibility, and achieve unexpected results" />

      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}
