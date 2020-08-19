import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { Button, Card } from "@material-ui/core";
import OverviewIcon from "./assets/overviewicon.svg";
import AllPayments from "./assets/all_payments.svg";
import ManualSettlement from "./assets/manual_settlement.svg";
import ReconciledPayments from "./assets/ReconciledPayments.svg";
import UnReconciled from "./assets/unreconciled.svg";
import AllOrders from "./assets/AllOrders.svg";
import PendingOrders from "./assets/PendingOrders.svg";
import ReconciledOrders from "./assets/ReconciledOrders.svg";
import MerchantIcon from "./assets/Merchant.svg";
import { Grid } from "@material-ui/core";
import smallChart from "./assets/smallChart.svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DatePicker from "./DatePicker.jsx";
import Bell from "./assets/bell.svg";
import DummyChart from "./DummyChart.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TransTable from "./TransTable.jsx";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "60px",
  },
  title: {
    color: "#1875F0",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "24px",
    lineHeight: "28px",
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
    borderColor: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  support: {
    color: "#647787",
    fontFamily: "Segoe UI",
    fontSize: "14px",
    lineHeight: "19px",
    flexBasis: "5%",
    cursor: "pointer"
  },
  ListItem: {
    padding: 0,
  },
  SideFont: {
    fontFamily: "Segoe UI",
    fontSize: "11px",
    lineHeight: "15px",
    color: "#647787",
  },
  box: {
    display: "flex",
    padding: "10px",
  },
  CardText: {
    fontFamily: "Segoe UI",
    fontSize: "12px",
    lineHeight: "16px",
  },
  overview: {
    fontFamily: "Segoe UI",
    fontSize: "14px",
    lineHeight: "16px",

    color: "#262626",
  },
}));

export default function Dashboard() {
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
    let d = new Date();

    let day = d.getDate();
    setDate(day);
    let mon = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12

    switch (mon) {
      case 1:
        mon = "Jan";
        break;
      case 2:
        mon = "Feb";
        break;
      case 3:
        mon = "Mar";
        break;
      case 4:
        mon = "Apr";
        break;
      case 5:
        mon = "May";
        break;
      case 6:
        mon = "Jun";
        break;
      case 7:
        mon = "Jul";
        break;
      case 8:
        mon = "Aug";
        break;
      case 9:
        mon = "Sep";
        break;
      case 10:
        mon = "Oct";
        break;
      case 11:
        mon = "Nov";
        break;
      case 12:
        mon = "Dec";
        break;

      default:
        break;
    }
    setMonth(mon);
    let yr = d.getFullYear();
    setYear(yr);
  }, []);

  const classes = useStyles();

  const updatePagination = (paginationObject) => {
    setPage(paginationObject.page);
    setRowsPerPage(paginationObject.rowsPerPage);
    setCount(paginationObject.count);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            TransMonitor
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "0.5px solid black",
              borderRadius: "8px",
              flexGrow: 1,
              margin: "0 10px",
            }}
          >
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "black" }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Typography className={classes.support} noWrap>
            Support
          </Typography>
          <Typography className={classes.support} noWrap>
            FAQ
          </Typography>
          <Badge badgeContent={8} color="primary">
            <img src={Bell} />
          </Badge>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              color: "black",
              margin: "0 30px",
              flexBasis: "10%",
            }}
          >
            <div>Hello</div>
            <div>Oluwaleke Ojo</div>
          </div>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div style={{ paddingLeft: "42px", marginTop: "33px" }}>
            <Button
              style={{
                backgroundColor: "#27AE60",
                color: "white",
                borderRadius: "30px",
                padding: "10px 25px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "0.2px",
              }}
            >
              GENERATE INVOICE
            </Button>
            <List className={classes.List}>
              <p className={classes.SideFont}>Main</p>
              {[["Overview", OverviewIcon]].map((text, index) => (
                <ListItem button key={text} className={classes.ListItem}>
                  <img style={{ marginRight: "10px" }} src={text[1]} />
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>
            <List className={classes.List}>
              <p className={classes.SideFont}>Payments</p>
              {[
                ["All Payments", AllPayments],
                ["Reconciled Payments", ReconciledPayments],
                ["Un - Reconciled Payments", UnReconciled],
                ["Manual Settlement", ManualSettlement],
              ].map((text, index) => (
                <ListItem button key={text} className={classes.ListItem}>
                  <img style={{ marginRight: "10px" }} src={text[1]} />
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>
            <List className={classes.List}>
              <p className={classes.SideFont}>Orders</p>
              {[
                ["All Orders", AllOrders],
                ["Pending Orders", PendingOrders],
                ["Reconciled Orders", ReconciledOrders],
              ].map((text, index) => (
                <ListItem button key={text} className={classes.ListItem}>
                  <img style={{ marginRight: "10px" }} src={text[1]} />
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>
            <List className={classes.List}>
              {[["Merchant Profile", MerchantIcon]].map((text, index) => (
                <ListItem button key={text} className={classes.ListItem}>
                  <img style={{ marginRight: "10px" }} src={text[1]} />
                  <ListItemText primary={text[0]} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} md={3}>
            <Card className={classes.box}>
              <div className={classes.CardText} style={{ marginRight: "10px" }}>
                Daily Transaction Volume <br /> 2,342
              </div>
              <div>
                <img src={smallChart} />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className={classes.box}>
              <div className={classes.CardText} style={{ marginRight: "10px" }}>
                Daily Transaction Value <br /> ₦4,000,000
              </div>
              <div>
                <img src={smallChart} />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className={classes.box}>
              <div className={classes.CardText} style={{ marginRight: "10px" }}>
                Total Transaction Volume <br /> 452,000
              </div>
              <div>
                <img src={smallChart} />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className={classes.box}>
              <div className={classes.CardText} style={{ marginRight: "10px" }}>
                Total Transaction Value <br /> ₦4,000,000
              </div>
              <div>
                <img src={smallChart} />
              </div>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginTop: "10px" }}>
          <Grid item md={8}>
            <Card style={{ padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    fontFamily: "Segoe UI",
                    fontSize: "18px",
                    lineHeight: "21px",
                  }}
                >
                  Today: {date}, {month} {year}
                </div>
                <div style={{ flexGrow: 1 }}></div>
                {/* Date Picker */}
                <div style={{ marginRight: "10px" }}>
                  <DatePicker />
                </div>
                <div
                  style={{
                    backgroundColor: "#CCCFD4",
                    background:
                      "linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%)",
                    border: "1px solid #CED0DA",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    padding: "1px",
                    width: "min-content",
                    margin: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArrowBackIosIcon style={{ color: "#CCCFD4" }} />
                </div>
                <div
                  style={{
                    backgroundColor: "#CCCFD4",
                    background:
                      "linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%)",
                    border: "1px solid #CED0DA",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    padding: "1px",
                    width: "min-content",
                    margin: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArrowForwardIosIcon style={{ color: "#CCCFD4" }} />
                </div>
              </div>
              <DummyChart />
            </Card>
          </Grid>
          <Grid item container md={4} wrap="wrap" spacing={1}>
            <Grid item xs={12}>
              <Card style={{ padding: "10px" }}>
                <p className={classes.overview}>Orders</p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{ flexBasis: "80%", border: "1px solid #27AE60" }}
                  ></div>
                  <div
                    style={{ flexBasis: "20%", border: "1px solid #FDC203" }}
                  ></div>
                </div>
                <p className={classes.overview}>
                  Pending Orders: <span style={{ color: "#FDC203" }}>20</span>
                </p>
                <p className={classes.overview}>
                  Reconciled Orders: <span style={{ color: "green" }}>80</span>
                </p>
                <p className={classes.overview}>
                  Total Orders: <span style={{ color: "blue" }}>100</span>
                </p>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ padding: "10px" }}>
                <p className={classes.overview}>Payments</p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{ flexBasis: "80%", border: "1px solid #27AE60" }}
                  ></div>
                  <div
                    style={{ flexBasis: "20%", border: "1px solid #FDC203" }}
                  ></div>
                </div>
                <p className={classes.overview}>
                  Un-reconciled Payments:
                  <span style={{ color: "#FDC203" }}>20</span>
                </p>
                <p className={classes.overview}>
                  Reconciled Payments:
                  <span style={{ color: "green" }}>80</span>
                </p>
                <p className={classes.overview}>
                  Total Payments: <span style={{ color: "blue" }}>100</span>
                </p>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <div>
          <p
            style={{
              fontFamily: "Segoe UI",
              fontSize: "36px",
              lineHeight: "48px",
              color: "#262626",
            }}
          >
            Payments
          </p>
          <Grid container alignItems="center">
            <Grid item md={3}>
              Showing {rowsPerPage} out of {count} payments
            </Grid>
            <Grid item md={5}>
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                placeholder="search payments"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid alignItems="center" item container md={3}>
              <Grid item>Show</Grid>
              <Grid item>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={1}
                  >
                    <MenuItem value={1}>All</MenuItem>
                    <MenuItem value={2}>Reconciled</MenuItem>
                    <MenuItem value={3}>Un-reconciled</MenuItem>
                    <MenuItem value={4}>Settled</MenuItem>
                    <MenuItem value={5}>Unsettled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <TransTable updatePagination={updatePagination} />
        </div>
      </main>
    </div>
  );
}
