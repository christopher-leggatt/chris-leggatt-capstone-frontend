import React from "react";
import Carousel from "react-material-ui-carousel";
import HomeBanner from "../HomeBanner/HomeBanner";
const { REACT_APP_BACKEND_URL } = process.env;

const HomeCarousel = () => {

const bannerPaths = (number) => {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(`${REACT_APP_BACKEND_URL}/images/banners/banner_${i + 1}.jpg`)    
  };

  return array;
}
  
  return (
    <Carousel      
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
        }
    }} 
    >
      {bannerPaths(5).map((banner, index) => (
        <HomeBanner key={`banner_${index}`} banner={banner} />
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
