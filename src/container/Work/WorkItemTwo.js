import React from "react";
import { Link } from "react-router-dom";

export default function WorkItemTwo({ data }) {
  return (
    <div className="work">
      {/* <div className="thumbnail"> */}
      <Link className="image" to={`/work-details/${data.id}`}>
        <img src={data.image} alt="work" />
      </Link>
      {/* </div> */}
      <div className="info">
        <h3 className="work__title">
          <Link to={`/work-details/${data.id}`}>{data.title}</Link>
        </h3>
        <p className="desc">{data.excerpt}</p>
        <Link to={`/work-details/${data.id}`} className="work__link">
          View Project
        </Link>
      </div>
    </div>
  );
}
