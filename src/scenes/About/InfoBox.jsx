import { useState, useEffect } from "react";
import { Card, Grid } from "@mui/material";

const InfoBox = ({ children, position }) => {
  const [isRaised, setIsRaised] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleMouseOver = (e) => {
    setIsRaised(true);
  };

  const handleMouseOut = (e) => {
    setIsRaised(false);
  };
  return (
    <Grid
      item
      component={Card}
      height="200px"
      width="100%"
      raised
      elevation={isRaised ? 6 : 2}
      xs={12}
      md={7}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      justifyContent={position === "right" ? "flex-start" : "flex-end"}
      pr={position === "left" ? 3 : 0}
      display="flex"
      alignItems="flex-start"
      columnGap={2}
      my={4}
      sx={{
        ...(position === "right"
          ? { borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", ml: {xs:3, md: 0}  }
          : { borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }),
        ...{
          transition: "transform 0.5s ease-out",
          transform: isAnimated
            ? "translateX(0)"
            : position === "right"
            ? "translateX(100%)"
            : "translateX(-100%)",
        },
      }}
    >
      {children}
    </Grid>
  );
};

export default InfoBox;
