import React from "react";
import { Card, CardMedia } from "@mui/material";

const Banner = ({ banner }) => {
  return (
    <Card
      raised={true}
      sx={{
        flex: "none",
        width: "100%",
        height: { xs: "200px", md: "300px" },        
      }}
    >
      <CardMedia
        component="img"
        sx={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
        image={banner.image}
      />      
    </Card>
  );
};

export default Banner;
