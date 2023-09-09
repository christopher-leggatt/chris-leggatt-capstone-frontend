import "./_CategoriesCarousel.scss";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CategoriesBanner from "../CategoriesBanner/CategoriesBanner";

const CategoriesCarousel = () => {
  const categories = [
    {
      name: "Flower",
      image: "http://localhost:5050/images/category_images/flower_category.jpg",
      category_name: "flower",
    },
    {
      name: "Vaporizers",
      image:
        "http://localhost:5050/images/category_images/vaporizers_category.jpg",
      category_name: "vaporizers",
    },
    {
      name: "Edibles",
      image:
        "http://localhost:5050/images/category_images/edibles_category.jpg",
      category_name: "edibles",
    },
    {
      name: "Flower2",
      image: "http://localhost:5050/images/category_images/flower_category.jpg",
      category_name: "flower2",
    },
    {
      name: "Vaporizers2",
      image:
        "http://localhost:5050/images/category_images/vaporizers_category.jpg",
      category_name: "vaporizers2",
    },
    {
      name: "Edibles2",
      image:
        "http://localhost:5050/images/category_images/edibles_category.jpg",
      category_name: "edibles2",
    },
    {
      name: "Vaporizers3",
      image:
        "http://localhost:5050/images/category_images/vaporizers_category.jpg",
      category_name: "vaporizers3",
    },
    {
      name: "Edibles3",
      image:
        "http://localhost:5050/images/category_images/edibles_category.jpg",
      category_name: "edibles3",
    },
  ];

  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    chunkedCategories.push(categories.slice(i, i + 4));
  }

  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={false}
      duration={200}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      fullHeightHover={true}
      swipe={true}
      sx={{ overflow: "hidden" }}
      navButtonsProps={{
        style: {
          opacity: 0.6,
        },
      }}
    >
      {chunkedCategories.map((chunkedCategory, index) => {
        return (
          <CategoriesBanner
            key={`categoryItem_${index}`}
            chunkedCategory={chunkedCategory}
          />
        );
      })}
    </Carousel>
  );
};

export default CategoriesCarousel;
