import React from "react";
import Nav from "../components/Nav/Nav";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import WorkData from "../data/work/workDetails";
import workDetailImg from "../images/bg/breadcrumb-bg-two.jpg";
import WorkDetailsContainer from "../container/WorkDetailsContainer/WorkDetailsContainer";

export default function WorkDetails({
  match: {
    params: { id },
  },
}) {
  const workId = parseInt(id, 10);
  const data = WorkData.filter((work) => work.id === workId);
  return (
    <React.Fragment>
      <SEO title="Mekzone || Work Details" />
      <Nav />
      <Breadcrumb
        image={workDetailImg}
        title={data[0]?.title}
        content="Home"
        contentTwo="Work"
      />
      <WorkDetailsContainer data={data[0]} />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}
