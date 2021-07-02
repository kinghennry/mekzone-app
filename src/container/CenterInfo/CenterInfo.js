import React from "react";
import "./centerinfo.css";
export default function CenterInfo({ title, text, fontBg, fontSm, nt }) {
  return (
    <center
      className={`contact__infoDetails ${nt} aos-animate aos-init`}
      data-aos="fade-up"
    >
      <h2 className={`${fontBg}`}>{title}</h2>
      <p className="sub__title">{text}</p>
    </center>
  );
}
