import { Fragment } from "react";
import { Box, Button, Divider } from "@mui/material";
import { FacebookRounded, Google } from "@mui/icons-material";
import FlexBox from "../flexBox/FlexBox";

const SocialButtons = (props) => {
  return (
    <Fragment>
      <Box mb={3} mt={3.8}>
        <Box width="200px" mx="auto">
          <Divider />
        </Box>

        <FlexBox justifyContent="center" mt={-1.625}>
          <Box color="brown.600" bgcolor="background.paper" px={2}>
            or
          </Box>
        </FlexBox>
      </Box>

      <Button
        className="facebookButton"
        size="medium"
        fullWidth
        sx={{
          height: 44,
        }}
      >
        <FacebookRounded />
        <Box fontSize="12px" ml={1}>
          Continue with Facebook
        </Box>
      </Button>

      <Button
        className="googleButton"
        size="medium"
        fullWidth
        sx={{
          height: 44,
        }}
      >
        <Google />
        <Box fontSize="12px" ml={1}>
          Continue with Google
        </Box>
      </Button>
    </Fragment>
  );
};
export default SocialButtons;
