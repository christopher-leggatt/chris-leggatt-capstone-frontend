import { Box, styled } from "@mui/material";
import { SectionHeader } from "../Typography/Typography";
import FlexBox from "../flexBox/FlexBox";
import useWindowSize from "../../hooks/useWindowSize";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(3),
  "& .headerHold": {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },  
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

// ==============================================================

// ==============================================================

const UserDashboardHeader = ({ title, button, navigation, ...props }) => {
  const width = useWindowSize();
  const isTablet = width < 1280;
  return (
    <StyledBox>
      <FlexBox mt={2} className="headerHold">
        <FlexBox alignItems="center">
          {props.icon && <props.icon color="primary" />}
          <SectionHeader ml={1.5} my="0px" lineHeight="1" whiteSpace="pre" color="text.primary">
            {title}
          </SectionHeader>
        </FlexBox>        

        {!isTablet && button}
      </FlexBox>

      {isTablet && !!button && <Box mt={2}>{button}</Box>}
    </StyledBox>
  );
};
export default UserDashboardHeader;
