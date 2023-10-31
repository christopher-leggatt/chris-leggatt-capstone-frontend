import { Box, styled } from "@mui/material";

const BodyWrapper = styled(Box)(({ theme, compact }) => ({
  transition: "margin-left 0.3s",
  marginLeft: compact ? "86px" : "280px",
  backgroundColor: "brown.100",
  paddingBottom: "2rem",
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0,
  },
}));
const InnerWrapper = styled(Box)(({ theme }) => ({
  transition: "all 0.3s",
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1280,
    margin: "auto",
  },
  [theme.breakpoints.down(1550)]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "2rem",

  },
}));

export {
    BodyWrapper,
    InnerWrapper
}