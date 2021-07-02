import PropTypes from "prop-types";
import React from "react";
import ReactVivus from "react-vivus";
import { Link } from "react-router-dom";
import "./iconbox.css";

const IconBox = ({ data, classOption }) => {
  return (
    <div className="service__info">
      <div className="icon">
        <ReactVivus
          id={`servicesvg-${data.id}`}
          option={{
            file: data.icon,
            animTimingFunction: "EASE",
            type: "oneByOne",
            delay: 80,
          }}
        />
      </div>
      <div className="service__detail">
        <h3 className="service__title">{data.title}</h3>
        <div className="service__text">
          <p>{data.desc}</p>
        </div>
        <Link to={data.link} className="link">
          {data.pageLink}
        </Link>
      </div>
    </div>
  );
};

IconBox.propTypes = {
  data: PropTypes.object,
  classOption: PropTypes.string,
};

IconBox.defaultProps = {
  classOption: "icon-box text-center",
};

export default IconBox;
