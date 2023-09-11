import React from "react";
import "./_Home.scss";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const Home = () => {

  document.title = "Convenient Cannabis Inc. - Home";

  return (
    <section className="home">
        <HomeHeader />
        <HomeCarousel />
    </section>
  );
};

export default Home;
