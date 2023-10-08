import { useCallback, useState } from "react";
import { Button, Card, Box, styled } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { PageHeader, H6 } from "../../components/Typography/Typography";
import { ReactComponent as Logo } from '../../assets/logo/convenient_cannabis_logo.svg';
import SiteTextField from '../../components/SiteTextField/SiteTextField';
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import EyeToggleButton from "../../components/EyeToggleButton/EyeToggleButton";
import FlexBox from "../../components/flexBox/FlexBox";
import FlexRowCenter from '../../components/flexBox/FlexRowCenter';
import { useTheme } from "@mui/material/styles";

const fbStyle = {
  background: "#3B5998",
  color: "white",
};
const googleStyle = {
  background: "#4285F4",
  color: "white",
};
export const Wrapper = styled(({ children, passwordVisibility, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.brown[600]
      : theme.palette.brown[400],
  },
  ".facebookButton": {
    marginBottom: 10,
    ...fbStyle,
    "&:hover": fbStyle,
  },
  ".googleButton": {
    ...googleStyle,
    "&:hover": googleStyle,
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24,
  },
}));

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const theme = useTheme();
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);
  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility} sx={{
        mx: "auto"
    }}>
      <form onSubmit={handleSubmit}>
        <Logo
          sx={{
            m: "auto",
            height: "24px",
            '& path': {
                fill: "theme.palette.primary.main"
            }
          }}
        />

        <PageHeader textAlign="center" mt={1} mb={4} fontSize={16}>
          Welcome To Convenient Cannabis
        </PageHeader>

        <SiteTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Email or Phone Number"
          placeholder="example@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <SiteTextField
          mb={2}
          fullWidth
          size="small"
          name="password"
          label="Password"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            height: 44,
          }}
        >
          Login
        </Button>
      </form>

      <SocialButtons />

      <FlexRowCenter mt="1.25rem">
        <Box>Don&apos;t have account?</Box>
        <Link to="/signup">
          <H6 ml={1} borderBottom="1px solid" borderColor="theme.palette.grey.900">
            Sign Up
          </H6>
        </Link>
      </FlexRowCenter>

      <FlexBox
        justifyContent="center"
        bgcolor="brown.200"
        borderRadius="4px"
        py={2.5}
        mt="1.25rem"
      >
        Forgot your password?
        <Link href="/reset-password">
          <H6 ml={1} borderBottom="1px solid" borderColor="theme.palette.brown.900">
            Reset It
          </H6>
        </Link>
      </FlexBox>
    </Wrapper>
  );
};
const initialValues = {
  email: "",
  password: "",
};
const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  email: yup.string().email("invalid email").required("Email is required"),
});
export default Login;
