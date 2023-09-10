import "./_SiteHeader.scss";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  AppBar,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as LogoIcon } from '../../../assets/logo/convenient_cannabis_logo.svg';

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState( null );
  const [anchorElUser, setAnchorElUser] = useState( null );
  const theme = useTheme();

  const navMenuItems = [
    { page: "Home", path: "" },
    { page: "About Us", path: "about" },
    { page: "Shop", path: "products" },
  ];

  const navLinks = [
    ...navMenuItems,
    { page: "Sign-in/Register", path: "signin" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      component="header"
      className="header"
      sx={{
        position: "static",
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
          onClick={handleOpenNavMenu}
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
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
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
              onClick={handleCloseNavMenu}
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
          <LogoIcon
            className="header__company-logo"            
          />
        </Link>        
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
          onClick={handleOpenUserMenu}
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
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Link to={"/signin"} className="user-menu__menu-item">
            <MenuItem component="article" className="user-menu__menu-item" onClick={handleCloseUserMenu}
>
              <Typography
                variant="body1"
                component="p"
                className="user-menu__menu-item-text"
              >
                Sign-in/Register
              </Typography>
            </MenuItem>
          </Link>
          <Link to={"/signin"} className="user-menu__menu-item">
            <MenuItem component="article" className="user-menu__menu-item" onClick={handleCloseUserMenu}
>
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

export default SiteHeader;
