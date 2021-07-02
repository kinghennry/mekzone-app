import React from "react";
import SEO from "../components/SEO/SEO";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Term from "../container/Term/Term";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <React.Fragment>
      <SEO title="MekZone || Terms and Conditions" />
      <Nav classOption="sticky" />
      <Term />
      <ScrollToTop />
      <Footer />
    </React.Fragment>
  );
}
