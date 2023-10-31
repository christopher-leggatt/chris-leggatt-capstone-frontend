import React from "react";
import "./_Home.scss";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import HomeHero from "./HomeHero";

const Home = () => {

  document.title = "Convenient Cannabis Inc. - Home";

  return (
    <section className="home">
        <HomeHero />
        <BannerCarousel />
    </section>
  );
};

export default Home;
