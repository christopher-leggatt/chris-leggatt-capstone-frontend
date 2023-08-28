import "./_Header.scss";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Theme,
  AppBar,
  Box,
} from "@mui/material";
import { Spa, AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const navigate = useNavigate();
  const [menuType, setMenuType] = useState(null);
  const [anchorEl, setAnchorEl] = useState({ nav: null, user: null });

  const theme = useTheme();

  const navMenuItems = [
    { page: "Home", path: "" },
    { page: "About Us", path: "about" },
    { page: "Shop", path: "shop" },
  ];

  const navLinks = [
    ...navMenuItems,
    { page: "Sign-in/Register", path: "users" },
  ];

  const handleOpenMenu = (event, type) => {
    setMenuType(type);
    setAnchorEl((prevState) => ({
      ...prevState,
      [type]: event.currentTarget,
    }));
  };

  const handleCloseMenu = () => {
    setMenuType(null);
    setAnchorEl({ nav: null, user: null });
  };

  return (
    <AppBar
      component="header"
      className="header"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
        columnGap: { xs: "16px", md: "24px" },
        px: { xs: "16px", md: "24px", lg: "130px" },
        py: { xs: "16px", md: "24px" },
      }}
    >
      {/* MUI mobile hamburger nav menu */}
      <Box
        className="nav-menu"
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          className="nav-menu__menu-btn"
          aria-label="navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(e) => handleOpenMenu(e, "nav")}
        >
          <MenuIcon
            className="nav-menu__menu-icon"
            sx={{
              height: { xs: "20px", md: "24px" },
              width: { xs: "20px", md: "24px" },
              fill: (theme) => theme.palette.primary.contrastText,
            }}
          />
        </IconButton>

        <Menu
          className="nav-menu__menu"
          id="menu-appbar"
          anchorEl={anchorEl.nav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={menuType === "nav"}
          onClose={handleCloseMenu}
          sx={{
            ":last-child": {
              display: "none",
            },
          }}
        >
          {navMenuItems.map((item) => (
            <Link
              to={`/${item.path}`}
              className="nav-menu__menu-item-link"
              key={item.page}
              onClick={handleCloseMenu}
            >
              <MenuItem component="article" className="nav-menu__menu-item">
                <Typography
                  variant="body1"
                  component="p"
                  className="nav-menu__menu-item-text"
                >
                  {item.page}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
      <Box
        component="figure"
        className="header__company-wrapper"
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: { xs: "8px", md: "16px" },
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        <Link to="/" className="header__company-logo-link">
          <Spa
            className="header__company-logo"
            sx={{
              height: { xs: "20px", md: "24px" },
              width: { xs: "20px", md: "24px" },
              fill: (theme) => theme.palette.secondary.main,
            }}
          ></Spa>
        </Link>
        <Typography
          variant="subtitle2"
          component="h2"
          className="header__company-name"
          color="inherit"
        >
          Convenient Cannabis
        </Typography>
      </Box>

      <Box
        className="header__navlinks"
        sx={{
          display: { xs: "none", md: "flex" },
          color: (theme) => theme.palette.primary.contrastText,
          columnGap: "24px",
        }}
      >
        {navLinks.map((link) => {
          return (
            <li key={`${link.page} link`} className="header__navlink-item">
              <Link to={`/${link.path}`} className="header__navlink">
                {link.page}
              </Link>
            </li>
          );
        })}
      </Box>

      {/* MUI mobile hamburger user menu */}
      <Box
        className="user-menu"
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <IconButton
          className="user-menu__menu-btn"
          aria-label="user menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(e) => handleOpenMenu(e, "user")}
        >
          <AccountCircle
            className="user-menu__menu-icon"
            sx={{
              height: { xs: "20px", md: "24px" },
              width: { xs: "20px", md: "24px" },
              fill: (theme) => theme.palette.primary.contrastText,
            }}
          />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl.user}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={menuType === "user"}
          onClose={handleCloseMenu}
        >
          <Link to={"/users"} className="user-menu__menu-item">
            <MenuItem component="article" className="user-menu__menu-item">
              <Typography
                variant="body1"
                component="p"
                className="user-menu__menu-item-text"
              >
                Sign-in/Register
              </Typography>
            </MenuItem>
          </Link>
          <Link to={"/users"} className="user-menu__menu-item">
            <MenuItem component="article" className="user-menu__menu-item">
              <Typography
                variant="body1"
                component="p"
                className="user-menu__menu-item-text"
              >
                My Account
              </Typography>
            </MenuItem>
          </Link>
        </Menu>
      </Box>
    </AppBar>
  );
};

export default Header;
