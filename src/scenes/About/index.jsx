import { CardContent, Grid } from "@mui/material";
import { InfoImage, ImageFrame } from "./AboutStyled";
import InfoBox from "./InfoBox";
import {
  BodyCopy,
  PageHeader,
  SubheaderMedium,
  SubheaderSmall,
  H6,
} from "../../components/typography";
import owner1 from "../../assets/images/owner1.png";
import owner2 from "../../assets/images/owner2.png";
import location1 from "../../assets/images/location1.png";
import location2 from "../../assets/images/location2.png";
import { FlexBox, FlexBetween } from '../../components/flex_box';

const AboutUs = () => {
  const handleMouseOver = (e) => {
    e.target.raised = true;
  };

  const handleMouseOut = (e) => {
    e.target.raised = true;
  };

  return (
    <FlexBox display="flex" flexDirection="column" alignItems="center" mt={3}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        bgcolor="brown.100"
        px={1}
        py={8}
        ml={0}
      >
        <Grid
          item
          xs={12}
          md={5}
          height="200px"
          pr={9}
          my={4}
          sx={{
            position: "relative",
            top: "-24px",
          }}
          pt={0}
        >
          <FlexBetween
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
          >
            <PageHeader variant="h1" gutterBottom>
              ABOUT US
            </PageHeader>
            <BodyCopy variant="p" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam...
            </BodyCopy>
          </FlexBetween>
        </Grid>
        <InfoBox position="right">
          <CardContent
            component={FlexBox}
            flexDirection="column"
            sx={{
              padding: 0,
              width: "15%",
            }}
          >
            <SubheaderSmall
              variant="h2"
              sx={{
                borderBottom: 2,
                borderColor: "brown.400",
                color: "brown.700",
              }}
            >
              NATHAN FLEMING
            </SubheaderSmall>
            <H6 color="brown.300">OWNER, IRRICANA</H6>
          </CardContent>
          <ImageFrame
            sx={{
              border: 1,
              borderColor: "divider",
              "&:hover": {
                boxShadow: (theme) => theme.shadows[3],
              },
            }}
          >
            <InfoImage image={owner1} />
          </ImageFrame>
          <ImageFrame
            sx={{
              border: 1,
              borderColor: "divider",
              "&:hover": {
                boxShadow: (theme) => theme.shadows[3],
              },
            }}
          >
            <InfoImage image={owner2} />
          </ImageFrame>
          <CardContent
            component={FlexBox}
            flexDirection="column"
            alignSelf="flex-end"
            sx={{
              padding: 0,
              width: "15%",
            }}
          >
            <SubheaderSmall
              variant="h2"
              sx={{
                borderBottom: 2,
                borderColor: "brown.400",
                color: "brown.700",
              }}
            >
              ZOE FLEMING
            </SubheaderSmall>
            <H6 color="brown.300">OWNER, OYEN</H6>
          </CardContent>
        </InfoBox>
        <InfoBox position="left">
          <CardContent
            component={FlexBox}
            flexDirection="column"
            sx={{
              padding: 0,
              width: "15%",
            }}
          >
            <SubheaderSmall
              variant="h2"
              sx={{
                borderBottom: 2,
                borderColor: "brown.400",
                color: "brown.700",
              }}
            >
              IRRICANA
            </SubheaderSmall>
            <H6 color="brown.300">LOCATION</H6>
          </CardContent>
          <ImageFrame
            sx={{
              border: 1,
              borderColor: "divider",
              "&:hover": {
                boxShadow: (theme) => theme.shadows[3],
              },
            }}
          >
            <InfoImage image={location1} />
          </ImageFrame>
          <ImageFrame
            sx={{
              border: 1,
              borderColor: "divider",
              "&:hover": {
                boxShadow: (theme) => theme.shadows[3],
              },
            }}
          >
            <InfoImage image={location2} />
          </ImageFrame>
          <CardContent
            component={FlexBox}
            flexDirection="column"
            alignSelf="flex-end"
            sx={{
              padding: 0,
              width: "15%",
            }}
          >
            <SubheaderSmall
              variant="h2"
              sx={{
                borderBottom: 2,
                borderColor: "brown.400",
                color: "brown.700",
              }}
            >
              OYEN
            </SubheaderSmall>
            <H6 color="brown.300">LOCATION</H6>
          </CardContent>
        </InfoBox>
      </Grid>
    </FlexBox>
  );
};

export default AboutUs;
