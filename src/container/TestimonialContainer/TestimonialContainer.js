import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testmonial.css";
import TestimonialData from "../../data/testimonial/testimonial.json";
import CenterInfo from "../../container/CenterInfo/CenterInfo";

export default function TestimonialContainer() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testemonials">
      <div className="container px">
        <CenterInfo
          title="What our customers are saying about our services"
          text="Get your company heading in the right direction with our digital marketing strategist"
          fontBg="fontBg"
          fontSm="fontSm"
        />
        <div className="testemonial">
          <div className="slider">
            <Slider {...settings} data-aos="fade-up" data-aos-delay="300">
              {TestimonialData &&
                TestimonialData.map((single, key) => {
                  return <Card data={single} key={key} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
