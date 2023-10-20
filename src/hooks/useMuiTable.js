import { useState } from "react";

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

//=====================================================================

const useMuiTable = (props) => {
  const { listData = [], defaultSort = "name", defaultOrder = "asc" } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(20);
  const [orderBy, setOrderBy] = useState(defaultSort);
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState(defaultOrder);

  // Handle list sorting
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Handle select whole list
  const handleSelectAllClick = (checked, defaultSelect) => {
    if (checked) {
      const newSelecteds = listData.map((n) => n[defaultSelect]);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // Handle individual row click
  const handleRowClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const handleChangePage = (_, newPage) => setPage(newPage - 1);
  const filteredList = stableSort(
    listData,
    getComparator(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return {
    page,
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleRowClick,
    handleChangePage,
    handleRequestSort,
    handleSelectAllClick,
  };
};
export default useMuiTable;
