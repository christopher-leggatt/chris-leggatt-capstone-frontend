import { Box, Drawer, styled } from "@mui/material";

// ==========================================================

const Wrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "inherit",
  position: "fixed",
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  zIndex: theme.zIndex.drawer + 3,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.brown[900],
}));

const DashboardDrawer = (props) => {
  const { children, open, onClose, drawerWidth = 280 } = props;
  return (
    <Drawer
      open={open}
      anchor="left"
      onClose={onClose}
      PaperProps={{
        sx: {
          width: drawerWidth,
        },
      }}
    >
      <Wrapper>{children}</Wrapper>
    </Drawer>
  );
};
export default DashboardDrawer;
