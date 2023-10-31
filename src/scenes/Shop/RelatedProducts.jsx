import { Box, Typography } from "@mui/material";
import Product from "../../components/Product/Product";


const RelatedProducts = ({ categorizedProducts, product }) => {
  return (
    
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
      {categorizedProducts && product && categorizedProducts
        .filter((relatedProduct) => relatedProduct.id !== product.id)
        .slice(0, 4)
        .map((product, i) => (
          <Product key={`${product.name}-${i}`} product={product} />
        ))}
    </Box>
  </Box>
  )
}

export default RelatedProducts
