import { Button, styled, AppBar, Toolbar, InputBase } from "@mui/material";
import FlexRowCenter from "../../flexBox/FlexRowCenter";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[2],
  color: theme.palette.text.primary,
}));

const StyledToolBar = styled(Toolbar)({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
});

const ToggleWrapper = styled(FlexRowCenter)(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.brown[100],
}));

const CustomButton = styled(Button)(({ theme }) => ({
  minHeight: 40,
  flexShrink: 0,
  marginLeft: 16,
  padding: "0 20px",
  borderRadius: "8px",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.brown[100],
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: 200,
  padding: "5px 10px",
  borderRadius: "8px",
  color: theme.palette.brown[500],
  backgroundColor: theme.palette.brown[100],
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export {
    DashboardNavbarRoot,
    StyledInputBase,
    StyledToolBar,
    CustomButton,
    ToggleWrapper,
};