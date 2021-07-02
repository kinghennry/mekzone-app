import React from "react";
import SEO from "../components/SEO/SEO";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Privacy from "../container/Privacy/Privacy";
export default function Policy() {
  return (
    <React.Fragment>
      <SEO title="MekZone || Privacy Policy" />
      <Nav classOption="sticky" />
      <Privacy />
      <ScrollToTop />
      <Footer />
    </React.Fragment>
  );
}
