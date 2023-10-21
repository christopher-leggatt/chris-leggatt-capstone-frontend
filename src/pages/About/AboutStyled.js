import { Card, styled, Grid, CardMedia, Box } from "@mui/material";
import FlexBox from "../../components/flexBox/FlexBox";
import themeColors from "../../styles/themes/themeColors";
import { useState, useEffect } from "react";

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
      justifyContent= {position === "right" ? "flex-start" : "flex-end"}
      pr= {position === "left" ? 3 : 0}

      display="flex"
      alignItems= "flex-start"
      columnGap={2}
      my={4}
      sx={{
        ...(position === "right"
          ? { borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }
          : { borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }),
          ...{
            transition: "transform 0.5s ease-out",  
            transform: isAnimated
              ? 'translateX(0)' 
              : position === "right" 
              ? 'translateX(100%)' 
              : 'translateX(-100%)' 
          },
      }}
    >
      {children}
    </Grid>
  );
};

const InfoImage = styled(CardMedia)({
  width: "100px",
  height: "100px",
  alignSelf: "flex-start",
  // flex: 1,
});

const ImageFrame = styled(FlexBox)({
  padding: 8,
  borderRadius: "10px",
  justifyContent: "center",
  alignItems: "center",
  // flex: 2,
});

export { InfoBox, InfoImage, ImageFrame };
