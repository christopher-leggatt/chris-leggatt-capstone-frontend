import React from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from '../../components/AddressForm/AddressForm';
import { useTheme } from "@mui/material/styles";

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {

  const theme = useTheme();

  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography sx={{
            mt: { xs: "24px", md: "36px" },
            mb: { xs: "16px", md: "24px" },
          }} variant="subheader">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb="24px">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
          label="Same for Shipping Address"
        />
      </Box>

      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography mb="24px" variant="subheader">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;