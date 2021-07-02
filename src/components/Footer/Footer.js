import "./footer.css";
import FooterLinkItem from "./FooterLinkItem";
import footerLogo from "../../images/logo/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterData from "../../data/Footer/footerItem.json";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="container px">
        <div className="footer__row flex">
          <div className="footer__left">
            <div className="footer__logo">
              <Link to="/">
                <img src={footerLogo} alt="mekzone" />
              </Link>
            </div>
            <div className="footer__contact">
              <p className="gray-p">(+1) 212-946-2701</p>
              <p className="gray-p">contact@mekzone.in</p>
            </div>
            <div className="footer__links">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="footer__icon grey-p" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="footer__icon grey-p left" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer__icon grey-p left" />
              </a>
            </div>
          </div>
          <div className="footer__right">
            {FooterData.map((single, key) => {
              return (
                <div key={key} className="footer__link">
                  <FooterLinkItem data={single} key={key} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer__bottom flex align space-bt">
          <h3>Copyright &#169; 2021.All Rights Reserved.</h3>
          <div className="footer__bottomOptions">
            <Link to="/terms" className="terms">
              Terms
            </Link>
            <Link to="/privacy-policy" className="terms">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
