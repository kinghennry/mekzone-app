import React from "react";
import IconBox from "../../container/IconBox/IconBox";
import IconBoxData from "../../data/homeIcon/icon";
import CenterInfo from "../../container/CenterInfo/CenterInfo";

export default function HomeService() {
  return (
    <section className="home__service" style={{ padding: "0px 0  50px" }}>
      <div className="container px">
        <CenterInfo
          title="We create a unique action plan for brands"
          text="Get your company heading in the right direction with our digital marketing strategist"
          fontBg="fontBg"
          fontSm="fontSm"
        />
        <div className="service__box">
          {IconBoxData &&
            IconBoxData.map((single, key) => {
              return (
                <div key={key} data-aos="fade-up" data-aos-delay="300">
                  <IconBox classOption="box-border" data={single} key={key} />{" "}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
