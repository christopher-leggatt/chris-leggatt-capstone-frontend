import { Box } from "@mui/material";
const FlexBox = ({ children, ...props }) => {
  return (
  <Box display="flex" {...props}>
    {children}
  </Box>
  )
};

export default FlexBox;
