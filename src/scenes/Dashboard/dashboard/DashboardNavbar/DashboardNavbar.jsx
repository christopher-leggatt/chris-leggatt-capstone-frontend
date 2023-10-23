import { useLocation, useNavigate } from "react-router-dom";
import { Box, useMediaQuery, Container } from "@mui/material";
import Globe from '../../icons/Globe';
import Toggle from "../../icons/Toggle";
import AccountPopover from '../../AccountPopover/AccountPopover';
import FlexBox from "../../flexBox/FlexBox";
// import NotificationsPopover from "./popovers/NoficationPopover";
import { Search } from "@mui/icons-material";
import {
  DashboardNavbarRoot,
  StyledInputBase,
  StyledToolBar,
  CustomButton,
  ToggleWrapper,
} from "./DashboardNavbarStyled";

const DashboardNavbar = ({ handleDrawerToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <DashboardNavbarRoot position="sticky">
      <Container maxWidth="xl">
        <StyledToolBar disableGutters>
          {downLg && (
            <ToggleWrapper onClick={handleDrawerToggle}>
              <Toggle />
            </ToggleWrapper>
          )}

          <CustomButton
            onClick={() => navigate("/")}
            variant="outlined"
            startIcon={
              <Globe
                sx={{
                  color: "brown.900",
                }}
              />
            }
          >
            Browse Website
          </CustomButton>

          <Box flexGrow={1} />

          <FlexBox alignItems="center" gap={2}>
            <StyledInputBase
              placeholder="Search anything..."
              startAdornment={
                <Search
                  sx={{
                    color: "brown.500",
                    mr: 1,
                  }}
                />
              }
            />

            {/* <NotificationsPopover /> */}
            <AccountPopover />
          </FlexBox>
        </StyledToolBar>
      </Container>
    </DashboardNavbarRoot>
  );
};
export default DashboardNavbar;
