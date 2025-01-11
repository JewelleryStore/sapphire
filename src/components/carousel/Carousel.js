// Carousel.js
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import SliderComponent from "@mui/material/Slider";

const Carousel = ({ children }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const settings = {
    infinite: true,
    slidesToShow: totalSlides < 4 ? totalSlides : totalSlides / 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: false, // Disable default arrows
    dots: false, // Disable dots
    afterChange: (current) => setCurrentSlide(current),
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const handleSliderChange = (event, newValue) => {
    setCurrentSlide(newValue);
    sliderRef.current.slickGoTo(newValue);
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
          <div className={styles.scrollSlider}>
            <SliderComponent
              value={currentSlide}
              min={0}
              max={totalSlides - 1}
              onChange={handleSliderChange}
              aria-labelledby="carousel-slider"
              sx={{
                color: "#D9D9D9",
                height: 20, // Height of the track
                "& .MuiSlider-thumb": {
                  height: 20,
                  width: 100,
                  opacity: 1,
                  backgroundColor: "#D9D9D9",
                  borderRadius: 10,
                  "&:hover, &:focus, &:active": {
                    boxShadow: "none", // Disable focus effect
                  },
                  "& .airbnb-bar": {
                    height: 9,
                    width: 1,
                    backgroundColor: "currentColor",
                    marginLeft: 1,
                    marginRight: 1,
                  },
                },
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-rail": {
                  opacity: 0.5,
                  backgroundColor: "#D9D9D9",
                },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
