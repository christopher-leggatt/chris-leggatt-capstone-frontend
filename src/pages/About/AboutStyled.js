import { styled, CardMedia } from "@mui/material";
import FlexBox from "../../components/flexBox/FlexBox";

const InfoImage = styled(CardMedia)({
  width: "100px",
  height: "100px",
  alignSelf: "flex-start",
});

const ImageFrame = styled(FlexBox)({
  padding: 8,
  borderRadius: "10px",
  justifyContent: "center",
  alignItems: "center",  
});

export { InfoImage, ImageFrame };
