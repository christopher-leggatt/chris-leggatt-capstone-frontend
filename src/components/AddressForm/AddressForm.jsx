import { getIn } from "formik";
import { Box, TextField, useMediaQuery } from "@mui/material";

const AddressForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:768px)");

  // these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="flex"
      flexDirection={isNonMobile ? "row" : "column"}
      className="addressForm"
      sx={{
        gap: { xs: "16px", md: "24px" },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        className="address-form__name-group"
      >
        <TextField
          fullWidth
          type="text"
          label="First Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name={formattedName("firstName")}
          error={formattedError("firstName")}
          helperText={formattedHelper("firstName")}
          className="address-form__firstName"
        />
        <TextField
          fullWidth
          type="text"
          label="Last Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name={formattedName("lastName")}
          error={formattedError("lastName")}
          helperText={formattedHelper("lastName")}
          className="address-form__lastName"
        />
        <TextField
          fullWidth
          type="text"
          label="Country"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.country}
          name={formattedName("country")}
          error={formattedError("country")}
          helperText={formattedHelper("country")}
          className="address-form__country"
        />
        <TextField
          fullWidth
          type="text"
          label="Street Address"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street1}
          name={formattedName("street1")}
          error={formattedError("street1")}
          helperText={formattedHelper("street1")}
          className="address-form__street1"
        />
        <TextField
          fullWidth
          type="text"
          label="Street Address 2 (optional)"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street2}
          name={formattedName("street2")}
          error={formattedError("street2")}
          helperText={formattedHelper("street2")}
          className="address-form__street2"
        />
        <TextField
          fullWidth
          type="text"
          label="City"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          name={formattedName("city")}
          error={formattedError("city")}
          helperText={formattedHelper("city")}
          className="address-form__city"
        />
        <TextField
          fullWidth
          type="text"
          label="Province"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.province}
          name={formattedName("province")}
          error={formattedError("province")}
          helperText={formattedHelper("province")}
          className="address-form__province"
        />
        <TextField
          fullWidth
          type="text"
          label="Postal Code"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.postalCode}
          name={formattedName("postalCode")}
          error={formattedError("postalCode")}
          helperText={formattedHelper("postalCode")}
          className="address-form__postal-code"
        />
      </Box>
    </Box>
  );
};

export default AddressForm;
