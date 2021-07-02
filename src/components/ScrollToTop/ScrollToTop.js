import React, { useState, useEffect } from "react";
import "./scrolltotop.css";
import { BsArrowUp } from "react-icons/bs";
const ScrollToTop = (props) => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      let scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener("scroll", function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener("scroll", function () {
        scrollHandler();
      });
    };
  }, [stick]);

  return (
    <>
      <button
        type="button"
        className={`scroll-top ${stick ? "show" : ""}`}
        onClick={onClickHandler}
        {...props}
      >
        <BsArrowUp />
      </button>
    </>
  );
};

export default ScrollToTop;
