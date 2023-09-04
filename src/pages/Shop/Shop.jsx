import "./_Shop.scss";
import React from "react";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";

const Shop = () => {
  return (
    <section className="shop">
      <ShopHeader />
      <CategoriesCarousel />
      <div className="shop__carousel-staff-picks"></div>
    </section>
  );
};

export default Shop;
