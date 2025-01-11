// Carousel.js
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = ({ children }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.prevArrow} onClick={previous}>
        <ArrowBackIos fontSize="large" />
      </div>
      <Slider ref={sliderRef} {...settings} className={styles.slider}>
        {React.Children.map(children, (child) => (
          <div className={styles.carouselItem}>
            {React.cloneElement(child, { className: styles.carouselImage })}
          </div>
        ))}
      </Slider>
      <div className={styles.nextArrow} onClick={next}>
        <ArrowForwardIos fontSize="large" />
      </div>
    </div>
  );
};

export default Carousel;
