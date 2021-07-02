import React from "react";
import SEO from "../components/SEO/SEO";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import contactImg from "../images/bg/breadcrumb-bg-five.jpg";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import ContactInformation from "../components/ContactInformation/ContactInfo";

import GoogleMap from "../components/GoogleMaps/GoogleMap";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <React.Fragment>
      <SEO title="Mekzone || Contact" />
      <Nav />
      <Breadcrumb
        image={contactImg}
        title="We are an agency located in New York"
        content="Home"
        contentTwo="Contact Us"
      />
      <ContactInformation />
      <GoogleMap />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}
