import { Box, Typography, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const theme = useTheme();

  return (
    <Box className="payment" m="30px 0">
      {/* CONTACT INFO */}
      <Box className="payment__contact-info">
        <Typography
          className="payment__header"
          sx={{
            mb: { xs: "16px", md: "24px" },
            mt: { xs: "36px", md: "24px" },
          }}
          variant="sectionHeader"
        >
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{
            mb: { xs: "16px", md: "24px" },
            display: "block",
          }}
          className="payment__email"
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          className="payment__phone"
        />
      </Box>
    </Box>
  );
};

export default Payment;
