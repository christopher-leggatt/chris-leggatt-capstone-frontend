import { alpha, styled } from "@mui/material";
import SimpleBar from "simplebar-react";

const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&.simplebar-visible:before": {
      opacity: 1,
    },
    "&:before": {
      backgroundColor: alpha(theme.palette.grey[400], 0.6),
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 9,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));

// =============================================================

// =============================================================

const Scrollbar = ({ children, autoHide = true, sx, ...props }) => {
  return (
    <StyledScrollBar sx={sx} autoHide={autoHide} {...props}>
      {children}
    </StyledScrollBar>
  );
};
export default Scrollbar;
