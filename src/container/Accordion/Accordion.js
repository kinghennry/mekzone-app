import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./accordion.css";

export default function Accordion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="accordion_item">
      <div className="question">
        <span className="question__text answer__text">{title}</span>
        <FiChevronDown
          className={`icon ${showInfo ? "icon--active" : ""}`}
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        />
      </div>
      <div className="answer">{showInfo && <p>{info}</p>}</div>
    </article>
  );
}
