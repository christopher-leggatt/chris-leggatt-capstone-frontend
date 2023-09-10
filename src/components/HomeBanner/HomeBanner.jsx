import React from "react";
import { Card, CardMedia } from "@mui/material";

const HomeBanner = ({ banner }) => {
  return (
    <Card
      raised={true}
      sx={{
        flex: "none",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          objectFit: "cover",
          objectPosition: "center",
          // width: "100%",
          aspectRatio: "1678 / 559",
        }}
        image={banner}
      />      
    </Card>
  );
};

export default HomeBanner;
