import { SubheaderExtraSmall } from "../../components/Typography/Typography";
import FlexBox from "../../components/flexBox/FlexBox";
import { Button, Card, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const infoList = [
  {
    title: "16",
    subtitle: "All Orders",
  },
  {
    title: "02",
    subtitle: "Awaiting Payments",
  },
  {
    title: "00",
    subtitle: "Awaiting Shipment",
  },
  {
    title: "01",
    subtitle: "Awaiting Delivery",
  },
];

export const TableRowItem = ({ title, value }) => {
  return (
    <FlexBox flexDirection="column" p={1}>
      <SubheaderExtraSmall color="brown.600" mb={0.5} textAlign="left">
        {title}
      </SubheaderExtraSmall>
      <span>{value}</span>
    </FlexBox>
  );
};

export const nameSplit = (name, username) => {
  let usernameSplit = username.split(" ");
  if (name === "first") {
    return usernameSplit[0];
  } else {
    return usernameSplit[1];
  }
};

export const HeaderLink = (
  <Button
    to="/profile"
    color="primary"
    LinkComponent={Link}
    sx={{
      px: 4,
      backgroundColor: "primary.light",
    }}
  >
    Edit Profile
  </Button>
);

export const TableRow = styled(Card)({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer",
    "& > *": {
      flex: "1 1 0",
    },
    "& .pre": {
      whiteSpace: "pre",
    },
  });
  export default TableRow;
