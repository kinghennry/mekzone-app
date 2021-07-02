import React from "react";
import { Link } from "react-router-dom";

export default function FooterLinkItem({ data }) {
  return (
    <div className="footer__widget">
      <h4 className="footer__widgetTitle">{data.title}</h4>
      <div className="footer__widgetContent">
        <ul>
          {data.list.map((single, key) => (
            <li key={key}>
              <Link to={single.url} className="gray-p">
                {single.text}{" "}
                {single?.badge && (
                  <span className="ft-badge">{single.badge}</span>
                )}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
