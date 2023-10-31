import {
  styled,
  TableCell,
  TableRow,
} from "@mui/material";
import { FlexBox } from '../../flex_box';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  paddingTop: 16,
  fontWeight: 600,
  paddingBottom: 16,
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  ":first-of-type": {
    paddingLeft: 24,
  },
}));

export const StatusWrapper = styled(FlexBox)(({ theme, payment }) => ({
  borderRadius: "8px",
  padding: "3px 12px",
  display: "inline-flex",
  color: payment ? theme.palette.error.main : theme.palette.success.main,
  backgroundColor: payment
    ? theme.palette.error[100]
    : theme.palette.success[100],
}));

export const StyledTableRow = styled(TableRow)({
  ":last-child .MuiTableCell-root": {
    border: 0,
  },
});


