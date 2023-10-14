import { Card, styled } from "@mui/material";
import { Person, Place, ShoppingBagOutlined } from "@mui/icons-material";
import NavLink from "../styled/NavLink";


export const MainContainer = styled(Card)(({ theme }) => ({
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    height: "calc(100vh - 64px)",
  },
}));
export const StyledNavLink = styled(({ children, isCurrentPath, ...rest }) => (
  <NavLink {...rest}>{children}</NavLink>
))(({ theme, isCurrentPath }) => ({
  display: "flex",
  alignItems: "center",
  borderLeft: "4px solid",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  justifyContent: "space-between",
  borderColor: isCurrentPath ? theme.palette.primary.main : "transparent",
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .nav-icon": {
      color: theme.palette.primary.main,
    },
  },
}));

export const linkList = [
  {
    title: "DASHBOARD",
    list: [
      {
        route: "/orders",
        title: "Orders",
        icon: ShoppingBagOutlined,
        count: 5,
      },
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    list: [
      {
        route: "/profile",
        title: "Profile Info",
        icon: Person,
        count: 3,
      },
      {
        route: "/address",
        title: "Addresses",
        icon: Place,
        count: 1,
      },      
    ],
  },
];
