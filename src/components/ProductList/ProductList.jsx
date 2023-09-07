import "./_ProductList.scss";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store";
import { useTheme } from "@mui/material/styles";

const ProductList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const products = useSelector((state) => state.products.products.products);
  const breakPoint = useMediaQuery("(min-width:768px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getProducts());
    console.log("Type of products:", typeof products);
  }, [dispatch]);

  const indicaProducts =
    products?.filter((product) => product.strain === "indica") || [];
  const sativaProducts =
    products?.filter((product) => product.strain === "sativa") || [];
  const hybridProducts =
    products?.filter((product) => product.strain === "hybrid") || [];

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
        {value === "all" &&
          (products || []).map((product) => (
            <Product
              className="product-list__item"
              product={product}
              key={`${product.name}-${product.id}`}
            />
          ))}
        {value === "indica" &&
          (indicaProducts || []).map((product) => (
            <Product
              className="product-list__item"
              product={product}
              key={`${product.name}-${product.id}`}
            />
          ))}
        {value === "sativa" &&
          (sativaProducts || []).map((product) => (
            <Product
              className="product-list__item"
              product={product}
              key={`${product.name}-${product.id}`}
            />
          ))}
        {value === "hybrid" &&
          (hybridProducts || []).map((product) => (
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
