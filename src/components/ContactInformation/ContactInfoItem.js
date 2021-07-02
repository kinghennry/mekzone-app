import React from "react";
import Vivus from "vivus";
import ReactVivus from "react-vivus";

const ContactInfoItem = ({ data }) => {
  return (
    <div className="contact__info flex">
      <div className="icon">
        <ReactVivus
          id={`contactsvg-${data.id}`}
          option={{
            file: data.icon,
            animTimingFunction: "EASE",
            type: "oneByOne",
            delay: 80,
          }}
        />
      </div>
      <div className="contact__detail">
        <h4 className="contact__title">{data.title}</h4>
        <span
          className="gray-p"
          dangerouslySetInnerHTML={{ __html: data.info }}
        />
      </div>
    </div>
  );
};

export default ContactInfoItem;
