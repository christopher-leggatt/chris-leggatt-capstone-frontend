import { Fragment } from "react";
import { Typography } from "@mui/material";
import { FlexBox } from "../../../components/flex_box";
import { linkList, MainContainer, StyledNavLink } from "./MemberNavigationUtils";
import { useLocation } from "react-router-dom";

const MemberNavigation = () => {

  const location = useLocation();
  const pathname = location.pathname;

  console.log('Pathname:', pathname);

  return (
    <MainContainer>
      {linkList.map((item) => (
        <Fragment key={item.title}>
          <Typography p="26px 30px 1rem" color="brown.600" fontSize="12px">
            {item.title}
          </Typography>

          {item.list.map((item) => (
            <StyledNavLink
              to={item.route}
              key={item.title}
              isCurrentPath={pathname === item.route}
            >
              <FlexBox alignItems="center" gap={1}>
                <item.icon
                  color="inherit"
                  fontSize="small"
                  className="nav-icon"
                />
                <span>{item.title}</span>
              </FlexBox>

              <span>{item.count}</span>
            </StyledNavLink>
          ))}
        </Fragment>
      ))}
    </MainContainer>
  );
};

export default MemberNavigation;
