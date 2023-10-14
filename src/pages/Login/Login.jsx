import { useCallback, useState } from "react";
import { Button, Box, SvgIcon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { PageHeader, H6 } from "../../components/Typography/Typography";
import { ReactComponent as Logo } from "../../assets/logo/convenient_cannabis_logo.svg";
import SiteTextField from "../../components/SiteTextField/SiteTextField";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import EyeToggleButton from "../../components/EyeToggleButton/EyeToggleButton";
import FlexBox from "../../components/flexBox/FlexBox";
import FlexRowCenter from "../../components/flexBox/FlexRowCenter";
// import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  handleLoginFormSubmit,
  initialValues,
  formSchema,
} from "./LoginUtils";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  // const theme = useTheme();
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        console.log("🚀 ~ file: Login.jsx:34 ~ Login ~ values:", values)
        handleLoginFormSubmit(values, dispatch, navigate);
      },
      validationSchema: formSchema,      
    });

  return (
    <Wrapper
      elevation={3}
      passwordVisibility={passwordVisibility}
      sx={{
        mx: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <SvgIcon
          component={Logo}
          sx={{
            m: "auto",
            height: "24px",
            fill: "theme.palette.primary.main",
            color: "theme.palette.primary.main",
            "& g & path": {
              fill: "theme.palette.primary.main",
            },
          }}
        />

        <PageHeader textAlign="center" mt={1} mb={4} fontSize={16}>
          Welcome To Convenient Cannabis
        </PageHeader>

        <SiteTextField
          mb={1.5}
          fullWidth
          name="login"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.login}
          onChange={handleChange}
          label="Email or Username"
          placeholder="Example or example@mail.com"
          error={!!touched.login && !!errors.login}
          helperText={touched.login && errors.login}
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
          <H6
            ml={1}
            borderBottom="1px solid"
            borderColor="theme.palette.grey.900"
          >
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
          <H6
            ml={1}
            borderBottom="1px solid"
            borderColor="theme.palette.brown.900"
          >
            Reset It
          </H6>
        </Link>
      </FlexBox>
    </Wrapper>
  );
};

export default Login;
