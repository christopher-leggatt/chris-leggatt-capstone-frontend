import { Container, Grid, Button, Person } from "@mui/material";
import MemberNavigation from "../../components/navigation/MemberNavigation";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MemberDashboardHeader from "../../components/dashboard/MemberDashboardHeader";
import { Link, useNavigate } from "react-router-dom";

/**
 *  Used in:
 *  1. wish-list page
 *  2. address and address-details page
 *  3. orders and order-details page
 *  4. payment-methods and payment-method-details page
 *  5. profile and edit profile page
 *  6. support-tickets page
 */
// ======================================================

// ======================================================

const MemberDashboard = () => {

  const { pathname } = useParams();

  const HeaderLink = (
    <Button
      href="/profile"
      color="primary"
      LinkComponent={Link}
      sx={{
        px: 4,
        bgcolor: "primary[200]",
      }}
    >
      Back to Profile
    </Button>
  );

  return (
    <>
      <Container
        sx={{
          my: "2rem",
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
            <MemberNavigation pathname={pathname} />
          </Grid>

          <Grid item lg={9} xs={12}>
            <MemberDashboardHeader
              icon={Person}
              title="Edit Profile"
              button={HeaderLink}
              navigation={<MemberNavigation pathname={pathname} />}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MemberDashboard;
