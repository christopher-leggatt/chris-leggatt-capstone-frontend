import Carousel from "react-material-ui-carousel";
import Banner from './Banner';
import './_BannerCarousel.scss';
const { REACT_APP_BACKEND_URL } = process.env;

const BannerCarousel = () => {
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
        "& .MuiButtonBase-root": {
          top: "calc(50% - 40px) !important",
        }       
      }}
    >
      {bannerPaths(5).map((banner, index) => (
        <Banner key={`banner_${index}`} banner={banner} />
      ))}
    </Carousel>
    </div>
  );
};

export default BannerCarousel;
