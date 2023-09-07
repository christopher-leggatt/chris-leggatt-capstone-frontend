import "./_CategoriesBanner.scss";
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const CategoriesBanner = ({ chunkedCategory }) => {
  const theme = useTheme();

  const CategoryCard = ({ name, image, category_name }) => {
    return (
      <Card
        raised
        component="section"
        className="categories-card"
        sx={{
          borderRadius: "30px",
          aspectRatio: "209 / 187",
        }}
      >
        <Link
          to={`/products/category/:${category_name}`}
          className="categories-card__content"
        >
          <CardActionArea
            className="categories-card__action-area"
            centerRipple={true}
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <CardContent
              component="div"
              className="categories-card__content"
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box className="categories-card__text-wrapper" sx={{
                display: "flex",
                flexDirection: "column",
              }} >
                <Typography
                  variant="subHeaderExtraSmall"
                  // component="h4"
                  sx={{
                    color: (theme) => theme.palette.dark.light,
                    textTransform: "uppercase",
                  }}
                >
                  SHOP
                </Typography>
                <Typography
                  variant="subHeaderMedium"
                  className="categories-card__name-text"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                  }}
                >
                  {name}
                </Typography>
              </Box>
              <CardMedia
                component="img"
                image={image}
                alt={name}
                className="categories-card__image"
                sx={{
                  alignSelf: "center",
                  objectFit: "contain",
                }}
              />
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    );
  };
  return (
    <Card
      elevation={0}
      component="section"
      className="categories-banner"
      sx={{ paddingTop: "16px", paddingBottom: "16px", overflow: "hidden", px: "8px" }}
    >
      <Grid container spacing={2} className="categories-banner__grid"  >
        {chunkedCategory.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={`categoryItem_${index}`}
            className="categories-banner__grid-item"            
          >
            <CategoryCard
              name={item.name}
              image={item.image}
              category_name={item.category_name}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default CategoriesBanner;
