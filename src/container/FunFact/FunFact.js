import React from "react";
import CounterUpData from "../../data/counter/counterText.json";
import CounterUpItem from "../../components/CounterUp/CounterUpItem";
import "./funfact.css";
export default function FunFact({ title }) {
  return (
    <div className="fun">
      <div className="container px">
        <center className="funfact__text">
          <h1>{title}</h1>
        </center>
        <div className="funfact">
          {CounterUpData &&
            CounterUpData.map((single, key) => {
              return (
                <div
                  key={key}
                  className="funfact__row aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <CounterUpItem data={single} key={key} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
