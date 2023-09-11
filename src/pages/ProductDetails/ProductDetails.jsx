import "./_ProductDetails.scss";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { Add, Remove } from "@mui/icons-material";
import { addToCart } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { getCategorizedProducts, getCurrentProduct } from "../../store";
import { formatPrice } from "../../utils";

const ProductDetails = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const product = useSelector((state) => state.products.currentProduct);
  const categorizedProducts = useSelector(
    (state) => state.products.categorizedProducts
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getCurrentProduct(productId));
  }, [productId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (product && product.category) {
      dispatch(getCategorizedProducts(product.category));
    }
  }, [product]);

  return (
    <Box
      className="productDetails"
      sx={{
        width: "100%",
        mt: { xs: "24px", md: "36px" },
        mb: { xs: "16px", md: "24px" },
      }}
    >
      <Box className="productDetails__container" display="flex" flexWrap="wrap">
        {/* IMAGES */}
        <Box className="productDetails__image" flex="1 1 25%">
          <img
            alt={product?.name}
            width="100%"
            height="100%"
            src={product?.image_url}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* TEXT CONTENT */}
        <Box
          className="productDetails__content"
          flex="1 1 75%"
          flexDirection="column"
          pl="24px"
        >
          <Typography
            className="productDetails__brand"
            variant="subtitleExtraSmall"
            display="block"
            gutterBottom
          >
            {product?.brand}
          </Typography>
          <Typography
            className="productDetails__name"
            variant="pageHeader"
            display="block"
            gutterBottom
          >
            {product?.name}
          </Typography>
          <Chip
            className="productDetails__priceChip"
            variant="outlined"
            label={`${formatPrice(product?.price)} • ${product?.weight}${
              product?.weight_unit
            }`}
          />
          <Box
            className="productDetails__actions"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            mt={2}
            gap="20px"
          >
            <Box
              className="productDetails__quantity-controls"
              display="flex"
              alignItems="center"
              sx={{
                border: `1.5px solid ${theme.palette.divider}`,
                borderRadius: "20px",
                backgroundColor: "#fff",
              }}
            >
              <IconButton
                size="medium"
                onClick={() => setCount(Math.max(count - 1, 1))}
              >
                <Remove />
              </IconButton>
              <Typography className="productDetails__count">{count}</Typography>
              <IconButton size="medium" onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
            </Box>
            <Button
              className="productDetails__add-btn"
              variant="contained"
              startIcon={<Add />}
              color="primary"
              size="medium"
              onClick={() => dispatch(addToCart({ product, count }))}
            >
              Add to Cart
            </Button>
          </Box>
          <Divider className="productDetails__divider" sx={{ my: 2 }} />
          <Box
            className="productDetails__chips"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap="10px"
          >
            <Chip
              className="productDetails__strainChip"
              label={product?.strain}
              variant="filled"
              sx={{
                color: theme.palette.light.contrastText,
              }}
            />
            <Chip
              className="productDetails__compositionChip"
              label={`${product?.thc}${product?.thc_cbd_unit} THC • ${product?.cbd}${product?.thc_cbd_unit} CBD`}
              variant="filled"
              sx={{
                color: theme.palette.light.contrastText,
              }}
            />
          </Box>
          <Typography className="productDetails__description" mt={2}>
            {product?.product_description}
          </Typography>
        </Box>
      </Box>

      <Box
        width="100%"
        sx={{
          mt: { xs: 3, md: "36px" },
        }}
      >
        <Typography
          variant="sectionHeader"
          fontWeight="bold"
          sx={{
            mb: { xs: "16px", md: "24px" },
          }}
        >
          Related Products
        </Typography>
        <Box
          mt="3"
          display="flex"
          flexWrap="wrap"
          justifyContent={
            categorizedProducts?.length > 3 ? "space-between" : "flex-start"
          }
          sx={{
            columnGap: { xs: "16px", md: "24px" },
          }}
        >
          {categorizedProducts
            .filter((relatedProduct) => relatedProduct.id !== product.id)
            .slice(0, 4)
            .map((product, i) => (
              <Product key={`${product.name}-${i}`} product={product} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
