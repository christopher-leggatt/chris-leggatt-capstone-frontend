import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Box, useMediaQuery, SvgIcon } from "@mui/material";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";
import DashboardScrollbar from "../DashboardScrollbar/DashboardScrollbar";
import FlexBetween from "../../flexBox/FlexBetween";
import { SidebarAccordion, adminNavItems, siteNavItems } from "./DashboardSidebarUtils";
import {
  ListLabel,
  BadgeValue,
  StyledText,
  BulletIcon,
  NavWrapper,
  ExternalLink,
  NavItemButton,
  SidebarWrapper,
  ChevronLeftIcon,
  ChevronRightIcon,
  ListIconWrapper,
} from "../../styled/sidebar";
import useAuth from "../../../hooks/useAuth";
import Logo from '../../../assets/logo/logo_transparent_bg.png';
const TOP_HEADER_AREA = 70;

// -----------------------------------------------------------------------------

const DashboardSidebar = (props) => {
  const {
    sidebarCompact,
    showMobileSideBar,
    setShowMobileSideBar,
    setSidebarCompact,
  } = props;
  const pathname = useLocation();
  const navigate = useNavigate();
  const [onHover, setOnHover] = useState(false);
  const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const { isAdmin } = useAuth();

  // side hover when side bar is compacted
  const COMPACT = sidebarCompact && !onHover ? 1 : 0;
  // handle active current page
  const activeRoute = (path) => (pathname === path ? 1 : 0);

  // handle navigate to another route and close sidebar drawer in mobile device
  const handleNavigation = (path) => {
    navigate(path);
    setShowMobileSideBar();
  };
  const renderLevels = (data) => {
    return data.map((item, index) => {
      if (item.type === "label")
        return (
          <ListLabel key={index} compact={COMPACT}>
            {item.label}
          </ListLabel>
        );
      if (item.children) {
        return (
          <SidebarAccordion key={index} item={item} sidebarCompact={COMPACT}>
            {renderLevels(item.children)}
          </SidebarAccordion>
        );
      } else if (item.type === "extLink") {
        return (
          <ExternalLink
            key={index}
            href={item.path}
            rel="noopener noreferrer"
            target="_blank"
          >
            <NavItemButton key={item.name} name="child" active={0}>
              {item.icon ? (
                <ListIconWrapper>
                  <item.icon />
                </ListIconWrapper>
              ) : (
                <span className="item-icon icon-text">{item.iconText}</span>
              )}

              <StyledText compact={COMPACT}>{item.name}</StyledText>

              {/* <Box mx="auto" /> */}

              {item.badge && (
                <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue>
              )}
            </NavItemButton>
          </ExternalLink>
        );
      } else {
        return (
          <Box key={index}>
            <NavItemButton
              key={item.name}
              className="navItem"
              active={activeRoute(item.path)}
              onClick={() => handleNavigation(item.path)}
            >
              {item?.icon ? (
                <ListIconWrapper>
                  <item.icon />
                </ListIconWrapper>
              ) : (
                <BulletIcon active={activeRoute(item.path)} />
              )}

              <StyledText compact={COMPACT}>{item.name}</StyledText>

              {/* <Box mx="auto" /> */}

              {item.badge && (
                <BadgeValue compact={COMPACT}>{item.badge.value}</BadgeValue>
              )}
            </NavItemButton>
          </Box>
        );
      }
    });
  };

  const content = (
    <DashboardScrollbar
      autoHide
      clickOnTrack={false}
      sx={{
        overflowX: "hidden",
        maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
      }}
    >
      <NavWrapper compact={sidebarCompact}>
        {isAdmin ? renderLevels(adminNavItems) : renderLevels(siteNavItems)}
      </NavWrapper>
    </DashboardScrollbar>
  );
  if (downLg) {
    return (
      <DashboardDrawer
        open={showMobileSideBar ? true : false}
        onClose={setShowMobileSideBar}
      >
        <Box p={2} maxHeight={TOP_HEADER_AREA}>
          <Box
            component="img"
            alt="Logo"
            width={105}
            // height={50}
            src={Logo}
            style={{
              marginLeft: 8,
            }}
          ></Box>
        </Box>

        {content}
      </DashboardDrawer>
    );
  }
  return (
    <SidebarWrapper
      compact={sidebarCompact ? 1 : 0}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => sidebarCompact && setOnHover(false)}
    >
      <FlexBetween
        p={2}
        maxHeight={TOP_HEADER_AREA}
        justifyContent={COMPACT ? "center" : "space-between"}
      >
        <Avatar
          sx={{
            borderRadius: 0,
            width: "auto",
            marginLeft: COMPACT ? 0 : 1,
            bgcolor: "#ffffff",
          }}
        >
          A
        </Avatar>

        <ChevronLeftIcon
          color="disabled"
          compact={COMPACT}
          onClick={setSidebarCompact}
          sidebarcompact={sidebarCompact ? 1 : 0}
        />
      </FlexBetween>

      {content}
    </SidebarWrapper>
  );
};
export default DashboardSidebar;
