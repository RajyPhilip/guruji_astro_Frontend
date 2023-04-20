import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./videoCaraousel.css";

import girlImage from "../Images/Videocaraousel/girlImage.png";
import leftImage from "../Images/Videocaraousel/leftImage.png";
import rightImage from "../Images/Videocaraousel/rightImage.png";
import leftArrow from "../Images/Videocaraousel/leftArrow.png";
import rightArrow from "../Images/Videocaraousel/rightArrow.png";
import play from '../Images/Videocaraousel/Play.png';

const images = [leftImage, leftImage, girlImage, rightImage, rightImage];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    initialSlide: 2,
    speed: 500,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    ref: sliderRef,
  };

  const handleLeftArrowClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(4);
    } else {
      setActiveIndex(activeIndex - 1);
    }
    sliderRef.current.slickPrev();
  };

  const handleRightArrowClick = () => {
    if (activeIndex === 4) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={`image-container ${activeIndex === index ? "active" : ""}`}>
                <img src={image} alt="" />
                <div className="play-btn-cont">
                    <img src={play} />
                </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="arrow-container">
        <img
          src={leftArrow}
          alt=""
          onClick={handleLeftArrowClick}
          className={`${activeIndex === 0 ? "disabled" : ""}`}
        />
        <img
          src={rightArrow}
          alt=""
          onClick={handleRightArrowClick}
          className={`${activeIndex === 4 ? "disabled" : ""}`}
        />
      </div>
    </div>
  );
};

export default VideoCarousel;
