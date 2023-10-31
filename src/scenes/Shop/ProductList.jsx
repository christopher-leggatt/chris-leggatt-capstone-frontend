import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import {
  getCategorizedProducts,
  getProducts,
} from "../../state/storeSlice";

const ProductList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const products = useSelector((state) => state?.store?.products?.products);
  const categorizedProducts = useSelector(
    (state) => state?.store?.products?.categorizedProducts
  );
  const breakPoint = useMediaQuery("(min-width:768px)");
  const { category } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategorizedProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  const getProductsByStrain = (strain) => {
    const productList = category ? categorizedProducts : products;
    return productList?.filter((product) => product?.strain === strain) || [];
  };

  const indicaProducts = getProductsByStrain("indica");
  const sativaProducts = getProductsByStrain("sativa");
  const hybridProducts = getProductsByStrain("hybrid");

  return (
    <Box
      className="product-list"
      width="100%"
      sx={{
        marginTop: { xs: "24px", md: "36px" },
        marginBottom: { xs: "16px", md: "24px" },
      }}
    >
      <Typography
        className="product-list__header"
        variant="sectionHeader"
        textAlign="center"
      >
        Our Featured Products
      </Typography>
      <Tabs
        className="product-list__tabs"
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab className="product-list__tab" label="ALL" value="all" />
        <Tab className="product-list__tab" label="INDICA" value="indica" />
        <Tab className="product-list__tab" label="SATIVA" value="sativa" />
        <Tab className="product-list__tab" label="HYBRID" value="hybrid" />
      </Tabs>
      <Box
        className="product-list__items"
        margin="0 auto"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: { xs: "16px", md: "24px" },
        }}
      >
        {/* Display all products from the selected category or all products */}
        {value === "all" &&
          ((category ? categorizedProducts : products) || []).map((product) => (
            <Product
              className="product-list__item"
              product={product}
              key={`${product.name}-${product.id}`}
            />
          ))}

        {/* Display indica products from the selected category or all indica products */}
        {value === "indica" &&
          indicaProducts.map((product) => (
            <Product
              className="product-list__item"
              product={product}
              key={`${product.name}-${product.id}`}
            />
          ))}

        {/* Display sativa products from the selected category or all sativa products */}
        {value === "sativa" &&
          sativaProducts.map((product) => (
            <Product
              className="product-list__item"
              product={product}
              key={`${product.name}-${product.id}`}
            />
          ))}

        {/* Display hybrid products from the selected category or all hybrid products */}
        {value === "hybrid" &&
          hybridProducts.map((product) => (
            <Product
              className="product-list__item"
              product={product}
              key={`${product.name}-${product.id}`}
            />
          ))}
      </Box>
    </Box>
  );
};

export default ProductList;
