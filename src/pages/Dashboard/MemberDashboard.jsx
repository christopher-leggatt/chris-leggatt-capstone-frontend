import {
  Container,
  Grid,
  Box,
  Card,
  Avatar,
  Typography,
  useMediaQuery
} from "@mui/material";
import MemberNavigation from "../../components/navigation/MemberNavigation";
import { useSelector } from "react-redux";
import MemberDashboardHeader from "../../components/dashboard/MemberDashboardHeader";
import useAuth from "../../hooks/useAuth";
import api from "../../state/api";
import { useState, useEffect } from "react";
import { Person } from "@mui/icons-material";
import FlexBox from "../../components/flexBox/FlexBox";
import FlexBetween from "../../components/flexBox/FlexBetween";
import {
  SubheaderMedium,
  H5,
  SubheaderExtraSmall,
} from "../../components/Typography/Typography";
import {
  infoList,
  TableRowItem,
  nameSplit,
  HeaderLink,
  TableRow
} from "./MemberDashboardUtils";

/**
 *  Used in:
 *  1. address and address-details page
 *  2. orders and order-details page
 *  3. profile and edit profile page
 */
// ======================================================

// ======================================================

const MemberDashboard = () => {
  const { userId, role, status, isAdmin, isMember, isGuest } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const token = useSelector((state) => state?.auth.token);
  const downMd = useMediaQuery((theme) => theme.breakpoints.down("md"));


  const getUserInfo = async () => {
    try {
      const response = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.userProfile[0]);
      setUserInfo(response.data.userProfile[0]);
      console.log(userInfo);
    } catch (error) {
      console.log(
        "🚀 ~ file: MemberDashboard.jsx:33 ~ getUserInfo ~ error:",
        error
      );
      console.error("Error fetching user info", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Container
        sx={{
          marginBottom: "2rem",
          bgcolor: "brown.100",
          paddingBottom: "2rem",
          marginTop: "1.5rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            lg={3}
            xs={12}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <MemberNavigation />
          </Grid>
          <Grid item lg={9} xs={12}>
            <MemberDashboardHeader
              icon={Person}
              title="Member Profile"
              button={HeaderLink}
              navigation={<MemberNavigation />}
            />
          </Grid>

          <Box mb={4} ml={3}>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <Card
                  sx={{
                    display: "flex",
                    p: "14px 32px",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      height: 64,
                      width: 64,
                    }}
                  >
                    <Person />
                  </Avatar>

                  <Box ml={1.5} flex="1 1 0">
                    <FlexBetween flexWrap="wrap">
                      <div>
                        <H5 my="0px">{userInfo.username && `${nameSplit(
                          "first",
                          userInfo.username
                        )} ${nameSplit("last", userInfo.username)}`}</H5>
                        <FlexBox alignItems="center">
                          <Typography color="brown.600">Balance:</Typography>
                          <Typography ml={0.5} color="primary.main">
                            $0.00
                          </Typography>
                        </FlexBox>
                      </div>

                      <Typography color="brown.600" letterSpacing="0.2em">
                        MEMBER
                      </Typography>
                    </FlexBetween>
                  </Box>
                </Card>
              </Grid>

              <Grid item md={6} xs={12}>
                <Grid container spacing={4}>
                  {infoList.map((item) => (
                    <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          p: "1rem 1.25rem",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <SubheaderMedium
                          color="primary.main"
                          my={0}
                          fontWeight={600}
                        >
                          {item.title}
                        </SubheaderMedium>

                        <SubheaderExtraSmall
                          color="brown.600"
                          textAlign="center"
                        >
                          {item.subtitle}
                        </SubheaderExtraSmall>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <TableRow
        sx={{
          cursor: "auto",
          p: "0.75rem 1.5rem",
          ml: "24px",
          width: "100%",
          ...(downMd && {
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }),
        }}
      >
        <TableRowItem title="First Name" value={userInfo.username && nameSplit("first", userInfo.username)} />
        <TableRowItem title="Last Name" value={userInfo.username && nameSplit("last", userInfo.username)} />
        <TableRowItem title="Email" value={userInfo.email} />
        <TableRowItem title="Phone" value={userInfo.phone} />
        <TableRowItem
          title="Birth date"
          value="01 01 1980"
        />
      </TableRow>

        </Grid>
      </Container>
    </>
  );
};

export default MemberDashboard;
