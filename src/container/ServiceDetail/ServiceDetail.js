import CenterInfo from "../../container/CenterInfo/CenterInfo";
import Parallax from "parallax-js";
import IconBoxData from "../../data/iconBox/icon-box";
import IconBox from "../IconBox/IconBox";
import "./servicedetail.css";
export default function ServiceDetail() {
  return (
    <section>
      <div className="container px">
        <CenterInfo
          title="Services that create identities, build brands, and get result"
          text="We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!"
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
