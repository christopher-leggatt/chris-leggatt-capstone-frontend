import { Box } from "@mui/material";
const FlexBetween = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
};

const FlexRowCenter = ({ children, ...props }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" {...props}>
      {children}
    </Box>
  );
};

const FlexBox = ({ children, ...props }) => {
  return (
    <Box display="flex" {...props}>
      {children}
    </Box>
  );
};

export { FlexBox, FlexBetween, FlexRowCenter };
