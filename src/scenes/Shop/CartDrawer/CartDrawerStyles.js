import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const CartHeaderBox = styled(StyledFlexBox)(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const CheckoutButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "45px",
  borderRadius: "22.5px",
  textAlign: "center",
}));

export const ItemQuantityBox = styled(StyledFlexBox)(({ theme }) => ({
  alignItems: "center",
  border: `1.5px solid ${theme.palette.divider}`,
  borderRadius: "20px",
}));
