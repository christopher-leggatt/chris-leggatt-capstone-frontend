import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, styled } from "@mui/material";
import {
  BadgeValue,
  BulletIcon,
  StyledText,
  NavItemButton,
  ListIconWrapper,
  //   ChevronLeftIcon,
  ChevronRightIcon,
} from "../../styled/sidebar";
import duotone from "../../../assets/icons/duotone";
import { HomeTwoTone, InfoTwoTone, StorefrontTwoTone } from "@mui/icons-material";

// styled component
const NavExpandRoot = styled(Box)({
  "& .subMenu": {
    padding: 0,
  },
  "& .navItem": {
    background: "transparent",
  },
  "& .expansion-panel": {
    "& .expansion-panel": {
      paddingLeft: 8,
    },
    overflow: "hidden",
    transition: "max-height 0.3s cubic-bezier(0, 0, 0.2, 1)",
  },
});

// ================================================================

const SidebarAccordion = (props) => {
  const { item, children, sidebarCompact } = props;
  const { name, icon, iconText, badge } = item;
  const pathname = useLocation();
  const componentHeight = useRef(0);
  const elementRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [hasActive, setHasActive] = useState(false);
  const handleClick = () => {
    componentHeight.current = 0;
    calculateHeight(elementRef.current);
    setCollapsed(!collapsed);
  };
  const calculateHeight = useCallback((node) => {
    if (node.name !== "child") {
      for (let child of node.children) {
        calculateHeight(child);
      }
    }
    if (node.name === "child") componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44; //here 44 is node height
    return;
  }, []);
  useEffect(() => {
    if (!elementRef) return;
    calculateHeight(elementRef.current);

    // OPEN DROPDOWN IF CHILD IS ACTIVE
    for (let child of item.children) {
      if (child.path === pathname) {
        setCollapsed(true);
        setHasActive(true);
      }
    }
    return () => {
      setHasActive(false);
      setCollapsed(false);
    };
  }, [calculateHeight, item.children, pathname]);
  return (
    <NavExpandRoot className="subMenu">
      <NavItemButton
        onClick={handleClick}
        active={hasActive ? 1 : 0}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center">
          {/* //@ts-ignore */}
          {icon && (
            <ListIconWrapper>
              <item.icon />
            </ListIconWrapper>
          )}
          {iconText && <BulletIcon active={hasActive ? 1 : 0} />}
          <StyledText compact={sidebarCompact}>{name}</StyledText>
        </Box>

        {badge && (
          <BadgeValue compact={sidebarCompact} className="itemIcon">
            {badge.value}
          </BadgeValue>
        )}

        <ChevronRightIcon
          color="disabled"
          compact={sidebarCompact}
          className="accordionArrow"
          collapsed={collapsed ? 1 : 0}
        />
      </NavItemButton>

      <div
        ref={elementRef}
        className="expansion-panel"
        style={{
          maxHeight:
            !collapsed || sidebarCompact
              ? "0px"
              : componentHeight.current + "px",
        }}
      >
        {children}
      </div>
    </NavExpandRoot>
  );
};

const adminNavItems = [
  {
    type: "label",
    label: "Admin",
  },
  {
    name: "Dashboard",
    icon: duotone.Dashboard,
    path: "/vendor/dashboard",
  },
  {
    name: "Products",
    icon: duotone.Products,
    children: [
      {
        name: "Product List",
        path: "/admin/products",
      },
      {
        name: "Create Product",
        path: "/admin/products/create",
      },
    ],
  },
  {
    name: "Categories",
    icon: duotone.Accounts,
    children: [
      {
        name: "Category List",
        path: "/admin/categories",
      },
      {
        name: "Create Category",
        path: "/admin/categories/create",
      },
    ],
  },
  {
    name: "Brands",
    icon: duotone.Apps,
    children: [
      {
        name: "Brand List",
        path: "/admin/brands",
      },
      {
        name: "Create Brand",
        path: "/admin/brands/create",
      },
    ],
  },
  {
    name: "Orders",
    icon: duotone.Order,
    children: [
      {
        name: "Order List",
        path: "/admin/orders",
      },
    ],
  },
  {
    name: "Customers",
    icon: duotone.Customers,
    path: "/admin/customers",
  },
  {
    type: "label",
    label: "Vendor",
  },
  {
    name: "Shop Setting",
    icon: duotone.SiteSetting,
    path: "/vendor/shop-settings",
  },
  {
    name: "Account Setting",
    icon: duotone.AccountSetting,
    path: "/vendor/account-setting",
  },
  {
    name: "Site Setting",
    icon: duotone.SiteSetting,
    path: "/vendor/site-settings",
  },
  {
    name: "Logout",
    icon: duotone.Session,
    path: "/",
  },
];

const siteNavItems = [
  {
    type: "label",
    label: "Navigation",
  },
  {
    name: "Home",
    icon: HomeTwoTone,
    path: "/",
  },
  {
    name: "About Us",
    icon: InfoTwoTone,
    path: "/about"    
  },
  {
    name: "Shop",
    icon: StorefrontTwoTone,
    children: [
      {
        name: "Shop Main",
        path: "/products",
      },
      {
        name: "Shop By Category",
        path: "/products/category/:edibles",
      },
    ],
  },
];

export { NavExpandRoot, SidebarAccordion, adminNavItems, siteNavItems };
