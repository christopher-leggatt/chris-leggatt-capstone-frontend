import React from "react";
import Carousel from "react-material-ui-carousel";
import HomeBanner from "../HomeBanner/HomeBanner";
import './_HomeCarousel.scss'
const { REACT_APP_BACKEND_URL } = process.env;

const HomeCarousel = () => {
  const bannerPaths = (number) => {
    const array = [];
    for (let i = 0; i < number; i++) {
      array.push(`${REACT_APP_BACKEND_URL}/images/banners/banner_${i + 1}.jpg`);
    }

    return array;
  };

  return (
    <div className="home-carousel-wrapper">
    <Carousel
    className="home-carousel"
      autoPlay={false}
      animation="slide"
      indicators={true}
      duration={500}
      navButtonsAlwaysVisible={false}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      fullHeightHover={true}
      swipe={true}
      navButtonsProps={{
        style: {
          opacity: 0.6,
        },
      }}
      sx={{
        width: "100%",
        height: '100%',       
      }}
    >
      {bannerPaths(5).map((banner, index) => (
        <HomeBanner key={`banner_${index}`} banner={banner} />
      ))}
    </Carousel>
    </div>
  );
};

export default HomeCarousel;