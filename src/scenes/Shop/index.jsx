import "./_Shop.scss";
import ShopHeader from "./ShopHeader";
import CategoriesCarousel from "./CategoriesCarousel";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
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
