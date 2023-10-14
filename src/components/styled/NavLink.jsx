import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/material";
import clsx from "clsx";

const StyledLink = styled(Link)(({ theme, active }) => ({
  position: "relative",
  transition: "color 150ms ease-in-out",
  color: active ? theme.palette.primary.main : "inherit",
  "&:hover": {
    color: `${theme.palette.primary.main} !important`,
  },
}));
const NavLink = ({ route, children, style, className, ...props }) => {
  const { pathname } = useParams();
  const checkRouteMatch = () => {
    if (route === `/${pathname}`) return pathname === route;
    return pathname.includes(route);
  };

  // active route
  const currentRoute = checkRouteMatch();
  return (
    <StyledLink
      to={route}
      style={style}
      className={clsx(className)}
      active={currentRoute ? 1 : 0}
      {...props}
    >
      {children}
    </StyledLink>
  );
};
export default NavLink;
