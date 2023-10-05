import "./_CartDrawer.scss";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  addToCart,
  setIsCartOpen,
} from "../../state/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  StyledFlexBox,
  CartHeaderBox,
  CheckoutButton,
  ItemQuantityBox,
} from "./CartDrawerStyles";
import { formatPrice } from "../../utils";

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
  const totalPrice = cart.reduce((total, product) => {
    return total + product.count * product.price;
  }, 0);
  const formattedTotalPrice = formatPrice(totalPrice);

  const list = (anchor) => (
    <Box
      className="cart-drawer"
      sx={{ width: "max(250px, 40vw)" }}
      role="presentation"
    >
      {/* Cart Header */}
      <CartHeaderBox
        sx={{
          mt: { xs: "24px", md: "36px" },
          pb: { xs: "16px", md: "24px" },
          px: { xs: "16px", md: "24px" },
        }}
        className="cart-drawer__header"
      >
        <StyledFlexBox
          className="cart-drawer__text-wrapper"
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="subheaderSmall"
            className="cart-drawer__heading"
            sx={{
              fontWeight: 700,
            }}
          >
            Shopping Cart ({cart.length})
          </Typography>
          <Typography
            variant="subHeaderExtraSmall"
            className="cart-drawer__subheading"
          >
            Subtotal: {formattedTotalPrice}
          </Typography>
        </StyledFlexBox>
        <Button
          className="cart-drawer__close-btn"
          aria-label=""
          variant="outlined"
          startIcon={<Close />}
          color="primary"
          size="small"
          onClick={() => dispatch(setIsCartOpen({}))}
          sx={{
            height: "45px",
            borderRadius: "6px",
          }}
        >
          Close
        </Button>
      </CartHeaderBox>
      {/* Checkout Button */}
      <Box
        className="cart-drawer__checkout-btn-wrapper"
        sx={{
          p: { xs: "16px", md: "24px" },
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <CheckoutButton
          className="cart-drawer__checkout-btn"
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
        </CheckoutButton>
      </Box>
      {/* Cart List */}
      <List
        className="cart-drawer__list"
        sx={{ px: { xs: "16px", md: "24px" } }}
      >
        {cart.map((product) => (
          <ListItem
            className="cart-drawer__list-item list-item"
            key={`${product.name}-${product.id}`}
            divider
            sx={{
              p: 0,
            }}
          >
            <ListItemAvatar
              className="list-item__avatar"
              sx={{
                flex: "1 1 20%",
              }}
            >
              <Avatar
                className="list-item__avatar-image"
                alt={product?.name}
                src={product.image_url}
                variant="square"
              />
            </ListItemAvatar>
            <ListItemText
              className="list-item__item-text"
              sx={{
                flex: "1 1 80%",
              }}
              primary={
                <FlexBox className="list-item__item-header">
                  <Typography
                    className="list-item__item-name"
                    fontWeight="bold"
                    variant="bodyCopyRegular"
                  >
                    {product.name}
                  </Typography>
                  <IconButton
                    className="list-item__remove-btn"
                    size="small"
                    onClick={() => dispatch(removeFromCart({ id: product.id }))}
                  >
                    <Close />
                  </IconButton>
                </FlexBox>
              }
              secondary={
                <>
                  <Typography
                    className="list-item__item-brand"
                    variant="bodyCopyAlt"
                  >
                    {product.brand}
                  </Typography>
                  <FlexBox className="list-item__item-actions" m="8px 0">
                    <ItemQuantityBox lassName="list-item__quantity-wrapper">
                      <IconButton
                        className="list-item__decrease-btn"
                        onClick={() =>
                          dispatch(decreaseCount({ id: product.id }))
                        }
                        size="small"
                      >
                        <Remove />
                      </IconButton>
                      <Typography className="list-item__quantity">
                        {product.count}
                      </Typography>
                      <IconButton
                        className="list-item__increase-btn"
                        size="small"
                        onClick={() =>
                          dispatch(increaseCount({ id: product.id }))
                        }
                      >
                        <Add />
                      </IconButton>
                    </ItemQuantityBox>
                    <Typography
                      className="list-item__item-price"
                      fontWeight="bold"
                    >
                      {formatPrice(product.price * product.count)}
                    </Typography>
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
