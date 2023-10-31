import Carousel from "react-material-ui-carousel";
import CategoriesBanner from "./CategoriesBanner";

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
      name: "Concentrates",
      image: "http://localhost:5050/images/category_images/concentrates_category.jpg",
      category_name: "concentrates",
    },
    {
      name: "Topicals",
      image:
        "http://localhost:5050/images/category_images/topicals_category.jpg",
      category_name: "topicals",
    },
    {
      name: "Prerolls",
      image:
        "http://localhost:5050/images/category_images/prerolls_category.jpg",
      category_name: "prerolls",
    },
    {
      name: "Seeds",
      image:
        "http://localhost:5050/images/category_images/seeds_category.jpg",
      category_name: "seeds",
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
