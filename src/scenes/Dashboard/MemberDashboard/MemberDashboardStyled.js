import { styled, Card } from "@mui/material";

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
