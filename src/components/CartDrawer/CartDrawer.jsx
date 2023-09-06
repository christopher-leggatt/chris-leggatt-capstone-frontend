import "./_CartDrawer.scss";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  addToCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartDrawer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);

  const cartTest = [
    {
      id: 1,
      name: "Lemon Haze Disposable",
      brand: "Test Co.",
      url: "http://localhost:5050/images/products/lemon_haze_disposable.jpg",
      price: 25.0,
    },
    {
      id: 2,
      name: "Lemon Haze Disposable",
      brand: "Test Co.",
      url: "http://localhost:5050/images/products/lemon_haze_disposable.jpg",
      price: 25.0,
    },
    {
      id: 3,
      name: "Lemon Haze Disposable",
      brand: "Test Co.",
      url: "http://localhost:5050/images/products/lemon_haze_disposable.jpg",
      price: 25.0,
    },
  ];

  const list = (anchor) => (
    <Box sx={{ width: "max(250px, 40vw)" }} role="presentation">
      {/* Cart Header */}
      <FlexBox
        sx={{
          mt: { xs: "24px", md: "36px" },
          pb: { xs: "16px", md: "24px" },
          px: { xs: "16px", md: "24px" },
          width: "100%",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
        className="cart__header"
      >
        <Box
          className="cart__text-wrapper"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="subheaderSmall"
            className="cart__heading"
            sx={{
              fontWeight: 700,
            }}
          >
            Shopping Cart ({cart.length})
          </Typography>
          <Typography
            variant="subHeaderExtraSmall"
            className="cart__subheading"
          >
            Subtotal: ${totalPrice}
          </Typography>
        </Box>
        <Button
          className="cart__close-btn"
          aria-label=""
          variant="outlined"
          startIcon={<Close />}
          color="primary"
          onClick={() => dispatch(setIsCartOpen({}))}
          sx={{
            width: { xs: "auto", md: "150px" },
            maxWidth: "150px",
            height: "45px",
            borderRadius: "6px",
          }}
        >
          Close
        </Button>
      </FlexBox>
      {/* Checkout Button */}
      <Box
        className="cart__checkout-btn-wrapper"
        sx={{
          p: { xs: "16px", md: "24px" },
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Button
          className="cart__checkout-btn"
          aria-label=""
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/checkout");
            dispatch(setIsCartOpen({}));
          }}
          sx={{
            width: "100%",
            height: "45px",
            textAlign: "center",
            borderRadius: "22.5px",
          }}
        >
          PROCEED TO CHECKOUT
        </Button>
      </Box>
      {/* Cart List */}
      <List sx={{ px: { xs: "16px", md: "24px" },}}
>
    {cartTest.map((item) => (
      <ListItem key={`${item.name}-${item.id}`} divider sx={{
        p: 0,
      }}>
        <ListItemAvatar sx={{
          flex: "1 1 20%"
        }} >
          <Avatar alt={item?.name} src={item.url} variant="square" sx={{
            height: "auto",
            width: "auto"
          }} />
        </ListItemAvatar>
        <ListItemText sx={{
          flex: "1 1 80%"
        }}
          primary={
            <FlexBox>
              <Typography fontWeight="bold" variant="bodyCopyRegular">
                {item.name}
              </Typography>
              <IconButton size="small"
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
              >
                <Close />
              </IconButton>
            </FlexBox>
          }
          secondary={
            <>
              <Typography variant="bodyCopyAlt">{item.brand}</Typography>
              <FlexBox m="8px 0">
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  border: `1.5px solid ${theme.palette.divider}`,
                  borderRadius: "20px",
                }}
                >
                  <IconButton
                    onClick={() => dispatch(decreaseCount({ id: item.id }))} size="small"
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{item.count}</Typography>
                  <IconButton size="small"
                    onClick={() => dispatch(increaseCount({ id: item.id }))}
                  >
                    <Add />
                  </IconButton>
                </Box>
                <Typography fontWeight="bold">${item.price}</Typography>
              </FlexBox>
            </>
          }
        />
      </ListItem>
    ))}
  </List>
    </Box>
  );

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isCartOpen}
      onClose={() => dispatch(setIsCartOpen())}
    >
      {list("right")}
    </Drawer>
  );
};

export default CartDrawer;


  
