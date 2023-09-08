import "./_ShopHeader.scss";
import { IconButton, AppBar, Box, Badge } from "@mui/material";
import { ShoppingBagOutlined, Menu } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Searchbar from "../Searchbar/Searchbar";
import CartDrawer from "../CartDrawer/CartDrawer";
import ShopDrawer from "../ShopDrawer/ShopDrawer";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../state";

const ShopHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const [drawerState, setDrawerState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, boolean) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState((prevState) => ({
      ...prevState,
      [anchor]: boolean,
    }));
  };

  const navLinks = [
    { page: "Home", path: "" },
    { page: "Categories", path: "/products/category/:category" },
  ];

  return (
    <AppBar
      component="header"
      className="shop-header"
      sx={{
        position: "static",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: (theme) => theme.palette.primary.contrastText,
        columnGap: { xs: "16px", md: "24px" },
        px: { xs: "16px", md: "24px", lg: "130px" },
        py: { xs: "16px", md: "24px" },
        my: { xs: "16px", md: "24px" },
      }}
    >
      <IconButton
        className="nav-menu__menu-btn"
        aria-label="navigation menu"
        aria-controls="nav-drawer"
        aria-haspopup="true"
        onClick={toggleDrawer("left", true)}
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menu
          className="nav-menu__menu-icon"
          sx={{
            height: { xs: "20px", md: "24px" },
            width: { xs: "20px", md: "24px" },
            fill: (theme) => theme.palette.primary.contrastText,
          }}
        />
      </IconButton>
      {drawerState.left && (
        <ShopDrawer
          navLinks={navLinks}
          anchorDir="left"
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
        />
      )}
      <Box
        className="shop-header__navlinks"
        sx={{
          display: { xs: "none", md: "flex" },
          color: (theme) => theme.palette.primary.contrastText,
          columnGap: "24px",
        }}
      >
        {navLinks.map((link) => {
          return (
            <li key={`${link.page} link`} className="shop-header__navlink-item">
              <Link to={`/${link.path}`} className="shop-header__navlink">
                {link.page}
              </Link>
            </li>
          );
        })}
      </Box>
      <Box
        className="shop-header__search-cart-wrapper"
        sx={{
          display: "flex",
        }}
      >
        <Searchbar />
        <IconButton
          className="shop-header__cart-btn"
          aria-label="cart button"
          aria-controls="cart-drawer"
          aria-haspopup="true"
          onClick={() => dispatch(setIsCartOpen())}
          variant={theme.typography.button}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.secondary.contrastText,
            padding: "4px 8px",
          }}
        >
          <Badge
            badgeContent={cart.length}
            invisible={cart.length === 0}
            color="error"
          >
            <ShoppingBagOutlined />
          </Badge>
        </IconButton>
      </Box>
      {isCartOpen && <CartDrawer />}
    </AppBar>
  );
};

export default ShopHeader;
