import React from "react";
import Carousel from "react-material-ui-carousel";
import Banner from "./Banner";

const BannerCarousel = () => {

  const banners = [
    {
      name: "Image 1",
      image: "http://localhost:5050/images/product_carousel_banner.jpg"
    },
    {
      name: "Image 2",
      image: "http://localhost:5050/images/categories_carousel_banner.jpg"
    },
    {
      name: "Image 3",
      image: "http://localhost:5050/images/product_carousel_banner_copy.jpg"
    }
  ]
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
    >
      {banners.map((banner, index) => (
        <Banner key={banner.name} banner={banner} />
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
