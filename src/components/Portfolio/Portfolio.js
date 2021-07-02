import React from "react";
import { slugify } from "../../utils";
import useMasonry from "../../hooks/use-masonry";
import workData from "../../data/work/workDetails";
import WorkItem from "../../container/AboutFive/WorkItem/WorkItem";
import WorkFilter from "../../components/Work/WorkFilter";
import "./portfolio.css";

export default function Portfolio() {
  // Isotope Categories list JS

  const { categories } = useMasonry(
    workData,
    ".mesonry-list",
    ".masonry-grid",
    ".messonry-button",
    ".messonry-button button"
  );
  return (
    <section className="ag-masonary-wrapper">
      <div className="container px">
        <div className="portfolio">
          <div className="row">
            <div
              className="about__contentArea ml  aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="span__title grey-p">Portfolios</span>
              <h3 className="header-font sm-font">Selected works</h3>
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
              <WorkFilter categories={categories} />
            </div>
          </div>

          <div className="mesonry-list">
            <div className="resizer col"></div>
            <div className="grid">
              {workData &&
                workData.map((portfolio) => (
                  <div
                    key={portfolio.id}
                    className={`masonry-grid ${portfolio.categories
                      .map((cat) => slugify(cat))
                      .join(" ")}`}
                  >
                    <WorkItem portfolio={portfolio} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
