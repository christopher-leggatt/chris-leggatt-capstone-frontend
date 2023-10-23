import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import api from "../../../state/api";
import { useState, useEffect } from "react";
import {
  WishCard,
  TrackingCard,
  cardList,
  RecentPurchase,
  recentPurchaseItems,
  StockOutProducts,
  stockOutItems,
} from "./AdminDashboardUtils";
import { BodyWrapper, InnerWrapper } from "./AdminDashboardStyled";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar/DashboardNavbar";

const AdminDashboard = () => {
  //   const { userId, role, status, isAdmin, isMember, isGuest } = useAuth;
  const [userInfo, setUserInfo] = useState({});
  const token = useSelector((state) => state?.auth.token);
  const [sidebarCompact, setSidebarCompact] = useState(0);
  const [showMobileSideBar, setShowMobileSideBar] = useState(0);

  // handle sidebar toggle for desktop device
  const handleCompactToggle = () =>
    setSidebarCompact((state) => (state ? 0 : 1));
  // handle sidebar toggle in mobile device
  const handleMobileDrawerToggle = () =>
    setShowMobileSideBar((state) => (state ? 0 : 1));

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
      <DashboardSidebar
        sidebarCompact={sidebarCompact}
        showMobileSideBar={showMobileSideBar}
        setSidebarCompact={handleCompactToggle}
        setShowMobileSideBar={handleMobileDrawerToggle}
      />
      <BodyWrapper compact={sidebarCompact ? 1 : 0}>
        <DashboardNavbar handleDrawerToggle={handleMobileDrawerToggle} />
        <InnerWrapper>
          <Grid container spacing={3}>
            {/* WISHING CARD */}
            <Grid item md={6} xs={12}>
              <WishCard />
            </Grid>

            {/* ALL TRACKING CARDS */}
            <Grid container item md={6} xs={12} spacing={3}>
              {cardList.map((item) => (
                <Grid item md={6} sm={6} xs={12} key={item.id}>
                  <TrackingCard
                    title={item.title}
                    color={item.color}
                    amount1={item.amount1}
                    amount2={item.amount2}
                    percentage={item.percentage}
                    status={item.status === "down" ? "down" : "up"}
                  />
                </Grid>
              ))}
            </Grid>

            {/* RECENT PURCHASE AREA */}
            <Grid item md={7} xs={12}>
              <RecentPurchase data={recentPurchaseItems} />
            </Grid>

            {/* STOCK OUT PRODUCTS */}
            <Grid item md={5} xs={12}>
              <StockOutProducts data={stockOutItems} />
            </Grid>
          </Grid>
        </InnerWrapper>
      </BodyWrapper>
    </>
  );
};

export default AdminDashboard;
