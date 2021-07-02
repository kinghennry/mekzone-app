import React from "react";
import WorkData from "../../data/work/workDetails";
import "./work.css";
import WorkItemTwo from "./WorkItemTwo";

export default function WorkContainer() {
  return (
    <section className="work__container">
      <div className="container px">
        <center className="center">
          <h2 className="work__title">
            Crafting effective digital marketing, web development, video content
            and communication design{" "}
          </h2>
        </center>
        <div className="worker__grid">
          {WorkData &&
            WorkData.map((single, key) => {
              return (
                <>
                  <div
                    key={key}
                    className="col mb-6 aos-init aos-animate "
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <WorkItemTwo
                      classOption="box-border"
                      data={single}
                      key={key}
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
}
