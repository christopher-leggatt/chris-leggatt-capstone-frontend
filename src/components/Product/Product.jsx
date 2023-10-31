import "./_Product.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { addToCart } from "../../state/cartSlice";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils";

const Product = ({ product }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { price, name, image_url, id } = product;

  return (
    <Box
      width={250}
      height={{ xs: "auto", md: 350 }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box position="relative">
        <img
          className="product__image"
          alt={name}
          width="100%"
          height="250px"
          src={`${image_url}`}
          cursor="pointer"
          onClick={() => navigate(`/products/${id}`)}
        />
        <Box
          className="product__hover-controls"
          display={isHovered ? "flex" : "none"}
          flexDirection="row"
          alignItems="center"
          justifyContent={{ xs: "flex-start", md: "space-between" }}
          sx={{
            position: "absolute",
            bottom: { xs: "16px", md: "24px" },
            left: { xs: "16px", md: "24px" },
            right: { xs: "16px", md: "24px" },
            gap: { xs: "16px", md: "24px" },
          }}
        >
          <Box
            className="product__quantity-controls"
            display="flex"
            alignItems="center"
            sx={{
              border: `1.5px solid ${theme.palette.divider}`,
              borderRadius: "20px",
              backgroundColor: "#fff",
              opacity: 0.8,
            }}
          >
            <IconButton
              className=""
              size="small"
              onClick={() => setCount(Math.max(count - 1, 1))}
            >
              <Remove />
            </IconButton>
            <Typography className="product__count">{count}</Typography>
            <IconButton
              className=""
              size="small"
              onClick={() => setCount(count + 1)}
            >
              <Add />
            </IconButton>
          </Box>
          <Button
            className="product__add-btn"
            variant="contained"
            startIcon={<Add />}
            color="primary"
            size="small"
            onClick={() =>
              dispatch(addToCart({ product: { ...product, count } }))
            }
            sx={{
              opacity: 0.8,
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
      <Box
        className="product__details"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          gap: { xs: "16px", md: "24px" },
          padding: { xs: "16px", md: "24px" },
        }}
      >
        <Box
          className=""
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            className="product__name"
            fontWeight="bold"
            variant="bodycopy"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2
            }}          >
            {product.name}
          </Typography>
          <Typography className="product__brand" variant="bodyCopyAlt">
            {product.brand}
          </Typography>
        </Box>
        <Typography
          className="product__price"
          fontWeight="bold"
          sx={{
            alignSelf: "center",
          }}
        >
          {formatPrice(product?.price)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Product;
