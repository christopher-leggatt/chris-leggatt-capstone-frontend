import { useLocation, useNavigate } from "react-router-dom";
import { Box, useMediaQuery, Container } from "@mui/material";
import Globe from '../../../components/icons/Globe';
import Toggle from "../../../components/icons/Toggle";
import AccountPopover from '../../../components/AccountPopover/AccountPopover';
import { FlexBox } from '../../../components/flex_box';
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
