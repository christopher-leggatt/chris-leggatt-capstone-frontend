import React from "react";
import { Card, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeBanner = ({ banner }) => {
  const navigate = useNavigate();

  return (
    <Card
      raised={true}
      onClick={() => navigate("/products")}
      sx={{
        flex: "none",
        width: "100%",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          objectFit: "cover",
          objectPosition: "center",
          aspectRatio: "1678 / 559",

        }}
        image={banner}
      />      
    </Card>
  );
};

export default HomeBanner;
