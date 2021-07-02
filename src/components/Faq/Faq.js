import React from "react";
import aboutThree from "../../images/faq/faq-2.jpg";
import aboutFour from "../../images/faq/faq-1.jpg";
import WorkFaq from "../../container/WorkFaq/WorkFaq";

export default function Faq() {
  return (
    <section className="skill">
      <div className="container px">
        <WorkFaq
          aboutThree={aboutThree}
          aboutFour={aboutFour}
          title="Frequently asked questions"
          desc="You've got questions and we've got answers."
        />
      </div>
    </section>
  );
}
