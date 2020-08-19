import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import orangeEllipse from "./assets/orangeEllipse.svg";
import greenEllipse from "./assets/greenEllipse.svg";
import greyEllipse from "./assets/greyEllipse.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function createData(id, symbol, itemType, price, transactionNo, time, status) {
  return { id, symbol, itemType, price, transactionNo, time, status };
}

const rows = [
  createData(
    1,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    2,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Pending"
  ),
  createData(
    3,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    4,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Pending"
  ),
  createData(
    5,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Un-reconciled"
  ),
  createData(
    6,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    7,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    8,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    9,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    10,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    11,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    12,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    13,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    14,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
  createData(
    15,
    "VW",
    'Apple MacBook 15" 250SSD 12GB',
    "$73430",
    123456789,
    "12:30",
    "Reconciled"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "itemType",
    numeric: false,
    disablePadding: false,
    label: "Item Type",
  },
  { id: "price", numeric: false, disablePadding: false, label: "Price" },
  {
    id: "transactionNo",
    numeric: false,
    disablePadding: false,
    label: "Transaction No",
  },
  { id: "time", numeric: false, disablePadding: false, label: "Time" },
  { id: "status", numeric: false, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function TransTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    props.updatePagination({ page, rowsPerPage, count: rows.length });
  }, [page, rowsPerPage, rows.length]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={{
                              backgroundColor: "#7F8FA4",
                              color: "white",
                              padding: "10px",
                              borderRadius: "50px",
                              boxSizing: "border-box",
                            }}
                          >
                            {row.symbol}
                          </div>
                          <div style={{ width: "5px" }}></div>
                          <div>{row.itemType}</div>
                        </div>
                      </TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">{row.transactionNo}</TableCell>
                      <TableCell align="left">{row.time}</TableCell>
                      <TableCell align="left">
                        <div style={{display: "flex", alignItems: "center",justifyContent: "space-between"}}>
                          <div
                            style={{
                              flexGrow: 1,
                              marginRight: "10px",
                              border: "1px solid #CCCFD4",
                              boxSizing: "border-box",
                              borderRadius: "30px",
                              padding: "10px",
                              fontFamily: "Segoe UI",
                              fontSize: "12px",
                              lineHeight: "14px",
                            }}
                          >
                            {row.status === "Reconciled" ? (
                              <span style={{ color: "#27AE60" }}>
                                <img src={greenEllipse} />
                                <span style={{ marginLeft: "5px" }}>
                                  Reconciled
                                </span>
                              </span>
                            ) : null}
                            {row.status === "Pending" ? (
                              <span style={{ color: "#EBC315" }}>
                                <img src={orangeEllipse} />
                                <span style={{ marginLeft: "5px" }}>
                                  Pending
                                </span>
                              </span>
                            ) : null}
                            {row.status === "Un-reconciled" ? (
                              <span style={{ color: "#7F8FA4" }}>
                                <img src={greyEllipse} />
                                <span style={{ marginLeft: "5px" }}>
                                  Un-reconciled
                                </span>
                              </span>
                            ) : null}
                          </div>
                          <ExpandMoreIcon />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
