import React, { useState } from "react";
import "./Customs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Customs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlide = 6;
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handlePageLoading = (targetPage) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(targetPage);
    }, 1500);
  };

  // Custom previous Slide
  const PrevArrow = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <div
        className={`${className} ${currentSlide === 0 ? "hidden" : ""}`}
        onClick={onClick}
        style={{ display: currentSlide === 0 ? "none" : "block" }}
      />
    );
  };

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={className}
        style={{ display: "block" }}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: false, //this is false to control arrow behavior
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    spaceBetween: 10,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, //custom next arrow
    prevArrow: <PrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="custom-wrapper">
      <div className="inner-custom-top">
        <div className="custom-one">
          <Link
            to="#"
            onClick={() => handlePageLoading("/continous-hinges")}
            className="custom-hinges"
          >
            <img src="/custom-hinge.webp" alt="custom" />
            <p>CONTINOUS HINGES</p>
          </Link>
        </div>
        <div className="custom-two">
          <div className="hinge-container1">
            <Link
              to="#"
              onClick={() => handlePageLoading("/hinges")}
              className="custom-hinges"
            >
              <img src="hinges.webp" alt="" />
              <p>HINGES</p>
            </Link>
          </div>
          <div className="hinge-container1">
            <Link
              to="#"
              onClick={() => handlePageLoading("/gate-hardware")}
              className="custom-hinges"
            >
              <img src="Gate-hardware.webp" alt="" />
              <p>GATE HARDWARE</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="inner-custom-bottom">
        <h1>EXPLORE BY CATEGORY</h1>
        <Slider {...settings}>
          <div className="cat-container">
            <div className="hinges">
              <img src="/butthinges.png" alt="hinges" />
            </div>
            <div className="text">
              <p>BUTT HINGES</p>
            </div>
          </div>
          <div className="cat-container">
            <div className="hinges">
              <img src="/carbonF-hinge.webp" alt="hinges" />
            </div>
            <div className="text">
              <p>CARBON FIBRE HINGES</p>
            </div>
          </div>
          <div className="cat-container">
            <div className="hinges">
              <img src="/marine-cast.webp" alt="hinges" />
            </div>
            <div className="text">
              <p>MARINE CAST HINGES</p>
            </div>
          </div>
          <div className="cat-container">
            <div className="hinges">
              <img src="/concealed-hinges.webp" alt="hinges" />
            </div>
            <div className="text">
              <p>CONCEALED HINGES</p>
            </div>
          </div>
          <div className="cat-container">
            <div className="hinges">
              <img src="/continous-hinge.webp" alt="hinges" />
            </div>
            <div className="text">
              <p>CONTINOUS HINGES</p>
            </div>
          </div>
          <div className="cat-container">
            <div className="hinges">
              <img src="/double-pin.webp" alt="hinges" />
            </div>
            <div className="text">
              <p>DOUBLE PIN HINGES</p>
            </div>
          </div>
          <div className="cat-container">
            <div className="hinges">
              <img src="/flag-slip.webp" alt="hinges" />
            </div>
            <div className="text">
              <p>FLAG SLIP JOINT HINGES</p>
            </div>
          </div>
          <div className="cat-container">
            <div className="hinges">
              <img src="/spring-loaded.webp" alt="hinges" />
            </div>
            <div className="text">
              <p>SPRING LOADED HINGES</p>
            </div>
          </div>
        </Slider>
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
    </section>
  );
};

export default Customs;
