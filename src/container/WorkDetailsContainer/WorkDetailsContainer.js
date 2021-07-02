import React from "react";
import { Link } from "react-router-dom";
import "./workdetails.css";
export default function WorkDetailsContainer({ data }) {
  const cate = data.categories.map((value, i) => {
    return (
      <span className="d-inline" key={i}>
        {value}
        {i !== data.categories.length - 1 && " , "}
      </span>
    );
  });
  return (
    <section className="work__details">
      <div className="container px">
        <div className="work__detailRow flex pt" data-aos="fade-up">
          <div className="work__mainInfo">
            <h2 className="header-font">
              About the <br /> project
            </h2>
            <div className="work__detailsList">
              <div className="details-list">
                <label className="label-b">Date</label>
                <span className="gray-p">{data.date}</span>
              </div>

              <div className="details-list">
                <label className="label-b">Client</label>
                <span className="gray-p">{data.client}</span>
              </div>

              <div className="details-list">
                <label className="label-b">Categories</label>
                <span className="gray-p">{cate}</span>
              </div>

              <div className="details-list">
                <label className="label-b">Awards</label>
                <span className="gray-p">{data.awards}</span>
              </div>
              <div>
                <label className="label-b mt">SHARE</label>
              </div>
            </div>
          </div>

          <div className="work__descInfo">
            <div className="work__content">
              <h6 data-aos="fade-up header-font">ABOUT THE PROJECT</h6>

              <div className="desc mt-8">
                {data.body.map((value, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="desc__text"
                        data-aos="fade-up"
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    </>
                  );
                })}

                <div className="work-btn">
                  <Link
                    className="workDetail__link"
                    to={process.env.PUBLIC_URL + data.btn.link}
                  >
                    {data.btn.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details__img" data-aos="fade-up">
          <img
            className="w-100"
            src={`${process.env.PUBLIC_URL}/${data.largeImage}`}
            alt="Agency"
          />
        </div>
        <div className="work__detailRow pt " data-aos="fade-up">
          <div className="work__mainInfo details">
            <h2 className="header-font">{data.subContent.title}</h2>
          </div>
          <div className="work__descInfo info" data-aos="fade-up">
            <div className="inner">
              <p className="gray-p">{data.subContent.text}</p>
            </div>
          </div>
        </div>
        <div className="details__grid 1fr">
          <div className="details__imgGrid" data-aos="fade-up">
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`}
              alt="Agency"
            />
          </div>
          <div className="details__imgGrid" data-aos="fade-up">
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`}
              alt="Agency"
            />
          </div>
        </div>
        <div className="thumbnail img" data-aos="fade-up">
          <img
            className="w-100"
            src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`}
            alt="Agency"
          />
        </div>
      </div>
    </section>
  );
}
