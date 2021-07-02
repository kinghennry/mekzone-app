import "./Backdrop.css";
import React from "react";

export default function Backdrop({ click, view }) {
  return <> {view && <div className="backdrop" onClick={click}></div>}</>;
}
