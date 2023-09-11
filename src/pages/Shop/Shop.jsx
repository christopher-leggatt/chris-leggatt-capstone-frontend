import "./_Shop.scss";
import React from "react";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import ProductList from "../../components/ProductList/ProductList";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";

const Shop = () => {

  document.title = "Shop with Convenient Cannabis Inc.";

  const { productId } = useParams();
  return (
    <section className="shop">
      <ShopHeader />
      {productId ? (
        <ProductDetails />
      ) : (
        <>
          <CategoriesCarousel />
          <ProductList />
        </>
      )}
    </section>
  );
};

export default Shop;
