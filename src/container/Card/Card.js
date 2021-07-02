import React from "react";
import { Avatar } from "@material-ui/core";
import "./card.css";

export default function Card({ data }) {
  return (
    <div className="card text-ct flex align">
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        className="card__avatar text-ct"
        src={data.image}
        alt=""
      />
      <div className="testimonial-content">
        <p className="gray-p">{data.desc}</p>
      </div>
      <div className="author-info">
        <div className="cite">
          <h6 className="name">{data.name}</h6>
          <span className="position">{data.position}</span>
        </div>
      </div>
    </div>
  );
}
