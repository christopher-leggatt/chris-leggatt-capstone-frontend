import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { alpha, Box, ButtonBase, styled } from "@mui/material";
import { BodyCopy, Span } from "../../typography"; 

// ===============================================================

const SidebarWrapper = styled(Box)(({ theme, compact }) => ({
  height: "100vh",
  position: "fixed",
  width: compact ? 86 : 280,
  transition: "all .2s ease",
  zIndex: theme.zIndex.drawer,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900],
  "&:hover": compact && {
    width: 280,
  },
}));

const NavWrapper = styled(Box)({
  height: "100%",
  paddingLeft: 16,
  paddingRight: 16,
});

const NavItemButton = styled(ButtonBase)(({ theme, active }) => ({
  height: 44,
  width: "100%",
  borderRadius: 8,
  marginBottom: 4,
  padding: "0 12px 0 16px",
  justifyContent: "flex-start",
  transition: "all 0.15s ease",
  ...(active && {
    color: theme.palette.info.main,
    backgroundColor: alpha(theme.palette.grey[800], 0.6),
    "& .MuiSvgIcon-root .secondary": {
      color: theme.palette.info.main,
      opacity: 1,
    },
  }),
}));

const ListLabel = styled(BodyCopy)(({ compact }) => ({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "20px",
  marginLeft: "15px",
  marginBottom: "10px",
  textTransform: "uppercase",
  transition: "all 0.15s ease",
  ...(compact && {
    opacity: 0,
    width: 0,
  }),
}));

const ListIconWrapper = styled(Box)(({ theme }) => ({
  width: 22,
  height: 22,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  marginRight: "0.8rem",
  justifyContent: "center",
  "& svg": {
    width: "100%",
    height: "100%",
    color: theme.palette.text.disabled,
  },
}));

const ExternalLink = styled("a")({
  overflow: "hidden",
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none",
});

const StyledText = styled(Span)(({ compact }) => ({
  whiteSpace: "nowrap",
  // paddingLeft: "0.8rem",
  transition: "all 0.15s ease",
  ...(compact && {
    opacity: 0,
    width: 0,
  }),
}));

const BulletIcon = styled("div")(({ theme, active }) => ({
  width: 3,
  height: 3,
  marginLeft: "10px",
  overflow: "hidden",
  borderRadius: "50%",
  marginRight: "1.3rem",
  background: active ? theme.palette.info.main : theme.palette.common.white,
  boxShadow: active
    ? `0px 0px 0px 4px ${alpha(theme.palette.info[500], 0.2)}`
    : "none",
}));

const BadgeValue = styled(Box)(({ compact }) => ({
  padding: "1px 8px",
  overflow: "hidden",
  borderRadius: "300px",
  display: compact ? "none" : "unset",
}));

const ChevronLeftIcon = styled(ChevronLeft)(({ compact, sidebarcompact }) => ({
  color: "rgba(255, 255, 255, .6)",
  cursor: "pointer",
  padding: 8,
  height: 40,
  width: 40,
  borderRadius: "50%",
  transition: "all 0.3s",
  display: compact ? "none" : "block",
  transform: sidebarcompact ? "rotate(180deg)" : "rotate(0deg)",
  "&:hover": {
    background: "rgba(255, 255, 255, .05)",
    color: "rgba(255, 255, 255, 1)",
  },
}));

const ChevronRightIcon = styled(ChevronRight)(
  ({ collapsed, compact, theme: { direction } }) => ({
    fontSize: 18,
    color: "white",
    transform: collapsed ? "0deg" : "rotate(90deg)",
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    ...(compact && {
      display: "none",
      width: 0,
    }),
    ...(collapsed &&
      direction === "rtl" && {
        transform: "rotate(180deg)",
      }),
  })
);

export {
  ListLabel,
  NavWrapper,
  StyledText,
  BulletIcon,
  BadgeValue,
  ExternalLink,
  NavItemButton,
  SidebarWrapper,
  ChevronLeftIcon,
  ChevronRightIcon,
  ListIconWrapper,
};
