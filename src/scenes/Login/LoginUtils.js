import { Card, styled } from "@mui/material";
import * as yup from "yup";
import { setCredentials } from "../../state/authSlice";
import api from "../../state/api";


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

export const initialValues = {
  login: "",
  password: "",
};

export const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  login: yup
    .string()
    .required("Email is required")
    .test(
      "login",
      "Invalid email or username",
      (value) =>
        yup.string().email().isValid(value) ||
        yup
          .string()
          .matches(/^[a-zA-Z0-9_]+$/, "Invalid username")
          .isValid(value)
    ),
});

export const handleLoginFormSubmit = async (values, dispatch, navigate) => {
    console.log('Form Submitted', values);
  try {
    const response = await api.post("/auth/login", {
      login: values.login,
      password: values.password,
    });

    if (response.data.accessToken) {
      dispatch(setCredentials({ accessToken: response.data.accessToken }));

      navigate("/dashboard");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: Login.jsx:75 ~ handleLoginFormSubmit ~ error:",
      error
    );
    console.error(
      "Login failed:",
      error.response?.data?.message || error.message
    );
  }
};

