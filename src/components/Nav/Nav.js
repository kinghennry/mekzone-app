import { useState } from "react";
import Navbar from "../NavBar/Navbar";
import Backdrop from "../Backdrop/Backdrop";

export default function Nav({ classOption }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar
        classOption={classOption}
        view={toggle}
        click={() => setToggle(!toggle)}
      />
      <Backdrop view={toggle} click={() => setToggle(false)} />
    </>
  );
}
