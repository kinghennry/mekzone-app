import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./counter.css";
export default function CounterUpItem({ data }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
    <div className="counter">
      <div className="number">
        <VisibilitySensor
          onChange={onVisibilityChange}
          offset={{ top: 10 }}
          delayedCall
        >
          <CountUp end={didViewCountUp ? data.number : 0} />
        </VisibilitySensor>
      </div>
      <h6 className="text">{data.text}</h6>
    </div>
  );
}
