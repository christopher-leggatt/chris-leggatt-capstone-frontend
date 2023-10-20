import { useState } from "react";
import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material";
import { H6, SubheaderExtraSmall } from "../Typography/Typography";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";

// styled components

const Divider = styled(Box)(({ theme }) => ({
  margin: "0.5rem 0",
  border: `1px dashed ${theme.palette.brown[200]}`,
}));

const AccountPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const { isAdmin, isMember } = useAuth();
  const token = useDispatch((state) => state.auth.token);

  return (
    <Box>
      <IconButton
        sx={{
          padding: 0,
        }}
        aria-haspopup="true"
        onClick={handleClick}
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "account-menu" : undefined}
      >
        {isAdmin ? (
          <Avatar
            sx={{
              color: "theme.palette.primary.900",
            }}
            alt="Admin"
            src="/assets/images/admin.svg"
          />
        ) : (
          <Avatar
            sx={{
              color: "theme.palette.primary.900",
            }}
            alt="Member"
            src="/assets/images/test_user.svg"
          />
        )}
      </IconButton>

      <Menu
        open={open}
        id="account-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            boxShadow: 2,
            minWidth: 200,
            borderRadius: "8px",
            overflow: "visible",
            border: "1px solid",
            borderColor: "brown.200",
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "brown.200",
            },
            "&:before": {
              top: 0,
              right: 14,
              zIndex: 0,
              width: 10,
              height: 10,
              content: '""',
              display: "block",
              position: "absolute",
              borderTop: "1px solid",
              borderLeft: "1px solid",
              borderColor: "brown.200",
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
            },
          },
        }}
      >
        <Box px={2} pt={1}>
          <H6>{token.login}</H6>
          <SubheaderExtraSmall color="brown.500">
            {token.role}
          </SubheaderExtraSmall>
        </Box>

        <Divider />
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Orders</MenuItem>
        <MenuItem>Settings</MenuItem>

        <Divider />
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
export default AccountPopover;
