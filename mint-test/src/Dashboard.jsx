import React from "react";
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
import NotificationsIcon from "@material-ui/icons/Notifications";
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
}));

export default function Dashboard() {
  const classes = useStyles();

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
            <NotificationsIcon style={{ color: "black" }} />
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
                  <ListItemText
                    className={classes.SideFont}
                    primary={text[0]}
                  />
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
                  <ListItemText
                    className={classes.SideFont}
                    primary={text[0]}
                  />
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
                  <ListItemText
                    className={classes.SideFont}
                    primary={text[0]}
                  />
                </ListItem>
              ))}
            </List>
            <List className={classes.List}>
              {[["Merchant Profile", MerchantIcon]].map((text, index) => (
                <ListItem button key={text} className={classes.ListItem}>
                  <img style={{ marginRight: "10px" }} src={text[1]} />
                  <ListItemText
                    className={classes.SideFont}
                    primary={text[0]}
                  />
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
      </main>
    </div>
  );
}
