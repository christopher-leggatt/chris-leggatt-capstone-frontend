import "./_ShopDrawer.scss";
import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";

const ShopDrawer = ({ navLinks, anchorDir, drawerState, toggleDrawer }) => {
  
  const list = (anchor) => (
    <Box
      sx={{ width: "30vw" }}
      role="presentation"
      onClick={(e) => toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((navLink, index) => (
          <ListItem key={`navLink-${index}`} disablePadding>
            <Link to={navLink.path}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <CategoryIcon />}
                </ListItemIcon>
                <ListItemText primary={navLink.page} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        variant="temporary"
        anchor={anchorDir}
        open={drawerState[anchorDir]}
        onClose={toggleDrawer(anchorDir, false)}
      >
        {list(anchorDir)}
      </Drawer>
    </div>
  );
};

export default ShopDrawer;
