// Carousel.js
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

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

  const isLoading = !children || React.Children.count(children) === 0;

  return (
    <div className={styles.carouselWrapper}>
      {isLoading ? (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className={styles.prevArrow} onClick={previous}>
            <ArrowBackIos fontSize="large" />
          </div>
          <Slider ref={sliderRef} {...settings} className={styles.slider}>
            {React.Children.map(children, (child) => (
              <div key={child.key} className={styles.carouselItem}>
                {React.cloneElement(child, { className: styles.carouselImage })}
              </div>
            ))}
          </Slider>
          <div className={styles.nextArrow} onClick={next}>
            <ArrowForwardIos fontSize="large" />
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
