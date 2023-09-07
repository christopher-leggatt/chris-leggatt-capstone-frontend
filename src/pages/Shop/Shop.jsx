import "./_Shop.scss";
import React from "react";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import ProductList from "../../components/ProductList/ProductList";

const Shop = () => {
  return (
    <section className="shop">
      <ShopHeader />
      <CategoriesCarousel />
      <ProductList />
      <div className="shop__carousel-staff-picks"></div>
    </section>
  );
};

export default Shop;
