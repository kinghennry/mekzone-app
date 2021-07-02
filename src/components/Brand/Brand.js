import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Brand({ data }) {
  return (
    <div className="brand" style={{ display: "flex" }}>
      <Link to={"/"}>
        <img src={data.image} alt="logo image" />
      </Link>
    </div>
  );
}

Brand.propTypes = {
  data: PropTypes.object,
};
