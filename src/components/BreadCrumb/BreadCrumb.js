import "./breadcrumb.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
export default function BreadCrumb({ title, content, contentTwo, image }) {
  return (
    <section
      className="breadcrumbs flex align justify-ct text-ct"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container px">
        <div className="breadcrumb">
          <h1 className="title">{title}</h1>
          <ul className="breadcrumb__list flex align justify-ct">
            <li className="breadcrumb__listItem">
              <Link to="/" className="breadcrumb__link">
                {content}
              </Link>
            </li>
            <ArrowForwardIosIcon className="breadcrumb__icon" />
            <li className="breadcrumb__listItem">{contentTwo}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
