import { Box, TextField } from "@mui/material";
import { InputFieldCopy } from "../../components/typography";


const SignInField = ({ label, InputProps, ...props }) => {
  const boxProps = {};
  const textFieldProps = {};
  for (const key in props) {
    if (spacePropList.includes(key)) {
      boxProps[key] = props[key];
    } else textFieldProps[key] = props[key];
  }
  return (
    <Box {...boxProps}>
      {label && (
        <InputFieldCopy
          display="block"
          mb={1}
          textAlign="left"
          fontWeight="600"
          color="grey.700"
        >
          {label}
        </InputFieldCopy>
      )}

      <TextField
        InputProps={{
          ...InputProps,
          style: {
            ...InputProps?.style,
            height: 44,
          },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};
const spacePropList = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
];
export default SignInField;
