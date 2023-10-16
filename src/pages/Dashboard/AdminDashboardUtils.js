import {
  Box,
  Card,
  SvgIcon,
  Button,
  Table,
  TableContainer,
  TableBody,
} from "@mui/material";
import { ArrowDropUp, ArrowDropDown, Done } from "@mui/icons-material";
import { ReactComponent as Welcome } from "../../assets/icons/welcome.svg";
import {
  SubheaderMedium,
  H5,
  BodyCopy,
  H6,
} from "../../components/Typography/Typography";
import FlexBetween from "../../components/flexBox/FlexBetween";
import FlexBox from "../../components/flexBox/FlexBox";
import useMuiTable from "../../hooks/useMuiTable";
import {
  StyledTableCell,
  StyledTableRow,
  StatusWrapper,
} from "../../components/styled/table";
import Reload from "../../components/icons/Reload";
import Scrollbar from "../../components/Scrollbar/Scrollbar";
import TableHeader from "../../components/TableHeader/TableHeader";

export const WishCard = () => (
  <Card
    sx={{
      p: 3,
      height: "100%",
      display: "flex",
      position: "relative",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <H5 color="info.main" mb={0.5}>
      Good Morning, Admin!
    </H5>
    <BodyCopy color="brown.600">
      Here’s what happening with your store today!
    </BodyCopy>

    <SubheaderMedium mt={3}>15,350.25</SubheaderMedium>
    <BodyCopy color="brown.600">Today’s Visit</BodyCopy>

    <SubheaderMedium mt={1.5}>$10360.66</SubheaderMedium>
    <BodyCopy color="brown.600">Today’s total sales</BodyCopy>

    <Box
      sx={{
        right: 24,
        bottom: 0,
        position: "absolute",
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <SvgIcon
        component={Welcome}
        viewBox="0 0 195 171"
        sx={{
          height: 171,
          width: 195,
        }}
      />
    </Box>
  </Card>
);

export const TrackingCard = (props) => {
  const { status, color, title, amount1, amount2, percentage } = props;
  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <H6 mb={1} color="grey.600">
        {title}
      </H6>
      <SubheaderMedium mb={0.3}>{amount1}</SubheaderMedium>

      <FlexBetween>
        <BodyCopy fontWeight={500} color="brown.500">
          {amount2}
        </BodyCopy>

        <FlexBox alignItems="center" color={color}>
          {status === "up" && <ArrowDropUp />}
          {status === "down" && <ArrowDropDown />}
          <BodyCopy fontSize={12}>{percentage}</BodyCopy>
        </FlexBox>
      </FlexBetween>
    </Card>
  );
};

TrackingCard.defaultProps = {
  status: "up",
  color: "info.main",
};

export const cardList = [
  {
    id: 1,
    title: "Order",
    amount1: "32,350",
    amount2: 9350,
    color: "info.main",
    percentage: "25.25%",
  },
  {
    id: 2,
    title: "Sold Items",
    amount1: "2,360",
    amount2: 1350,
    color: "error.main",
    percentage: "2.65%",
    status: "down",
  },
  {
    id: 3,
    title: "Gross Sale",
    amount1: "$12,460.25",
    amount2: 11350,
    color: "success.main",
    percentage: "10.25%",
  },
  {
    id: 4,
    title: "Total Shipping Cost",
    amount1: "$6,240",
    amount2: 4350,
    color: "error.main",
    percentage: "13.15%",
    status: "down",
  },
];

export const DataListTable = ({ dataList, tableHeading, type }) => {
  const { order, orderBy, filteredList, handleRequestSort } = useMuiTable({
    listData: dataList,
  });
  const recentPurchase = type === "RECENT_PURCHASE";
  return (
    <Scrollbar>
      <TableContainer
        sx={{
          minWidth: recentPurchase ? 600 : 0,
        }}
      >
        <Table>
          <TableHeader
            order={order}
            orderBy={orderBy}
            heading={tableHeading}
            onRequestSort={handleRequestSort}
          />
          {/* recent purchase table body */}
          {recentPurchase && (
            <TableBody>
              {filteredList.map((row, index) => {
                const { id, amount, payment, product } = row;
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{id}</StyledTableCell>
                    <StyledTableCell align="left">{product}</StyledTableCell>

                    <StyledTableCell align="left">
                      <StatusWrapper
                        gap={1}
                        alignItems="center"
                        payment={payment === "Pending" ? 1 : 0}
                      >
                        <Box>{payment}</Box>
                        {payment === "Pending" && (
                          <Reload
                            sx={{
                              fontSize: 13,
                            }}
                          />
                        )}
                        {payment !== "Pending" && (
                          <Done
                            sx={{
                              fontSize: 13,
                            }}
                          />
                        )}
                      </StatusWrapper>
                    </StyledTableCell>

                    <StyledTableCell align="center">$${amount}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}

          {/* stock out table body */}
          {type === "STOCK_OUT" && (
            <TableBody>
              {filteredList.map((row, index) => {
                const { amount, stock, product } = row;
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{product}</StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: "error.main",
                      }}
                    >
                      {stock}
                    </StyledTableCell>

                    <StyledTableCell align="center">$${amount}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};

export const recentPurchaseTableHeading = [
  {
    id: "orderId",
    label: "Order ID",
    alignRight: false,
  },
  {
    id: "product",
    label: "Product",
    alignRight: false,
  },
  {
    id: "payment",
    label: "Payment",
    alignRight: false,
  },
  {
    id: "amount",
    label: "Amount",
    alignCenter: true,
  },
];

export const recentPurchaseItems = [
  {
    id: "#6d3wedo5",
    amount: 152.25,
    payment: "Success",
    product: "Aavic Headphone",
  },
  {
    id: "#6d3wedo6",
    amount: 125.25,
    payment: "Pending",
    product: "Nike Shoes",
  },
  {
    id: "#6d3wedo7",
    amount: 115.25,
    payment: "Success",
    product: "Premium Shirt For Men",
  },
  {
    id: "#6d3wedo8",
    amount: 97.25,
    payment: "Pending",
    product: "Polo T-shirt",
  },
  {
    id: "#6d3wedo9",
    amount: 255.25,
    payment: "Success",
    product: "Jeans Pant",
  },
];

export const RecentPurchase = ({ data }) => {
  return (
    <Card>
      <FlexBetween px={3} py={2.5}>
        <H5>Recent Purchases</H5>

        <Button size="small" color="info" variant="outlined">
          All Orders
        </Button>
      </FlexBetween>

      <DataListTable
        dataList={data}
        tableHeading={recentPurchaseTableHeading}
        type="RECENT_PURCHASE"
      />
    </Card>
  );
};

export const stockOutTableHeading = [
  {
    id: "product",
    label: "Product",
    alignRight: false,
  },
  {
    id: "stock",
    label: "Stock",
    alignRight: false,
  },
  {
    id: "amount",
    label: "Amount",
    alignCenter: true,
  },
];

export const stockOutItems = [
  {
    amount: 152.25,
    stock: "00",
    product: "Samsung Glaxy-M1",
  },
  {
    amount: 125.25,
    stock: "00",
    product: "Nike Shoes",
  },
  {
    amount: 115.25,
    stock: "00",
    product: "Premium Shirt For Men",
  },
  {
    amount: 97.25,
    stock: "00",
    product: "Polo T-shirt",
  },
  {
    amount: 255.25,
    stock: "00",
    product: "Jeans Pant",
  },
];

export const StockOutProducts = ({ data }) => {
  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <FlexBetween px={3} py={2.5}>
        <H5>Stock Out Products</H5>

        <Button size="small" color="info" variant="outlined">
          All Products
        </Button>
      </FlexBetween>

      <DataListTable
        dataList={data}
        tableHeading={stockOutTableHeading}
        type="STOCK_OUT"
      />
    </Card>
  );
};
