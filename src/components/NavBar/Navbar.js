import { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";

export default function Navbar({ view, click, classOption }) {
  const [show, handleShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${classOption} ${show && "header__scroll"}`}>
      <div className="container px">
        <nav className="nav flex align space-bt">
          <div className="navbar__logo">
            <Link to="/">
              <img src={logo} alt="mekzone" />
            </Link>
          </div>
          <ul className={`navbar__links flex ${view ? "open" : ""}`}>
            <div className="navlink__logo">
              <img src={logo} alt="mekzone" />
            </div>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/service" className="nav__link">
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/work" className="nav__link">
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="nav__toggle" onClick={click}>
            <span className={`${view ? "span1--active" : ""}`}></span>
            <span style={{ opacity: view ? "0" : "" }}></span>
            <span style={{ transform: view ? "rotate(-45deg)" : "" }}></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
