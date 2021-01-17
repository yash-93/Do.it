import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    height: "75px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "2rem",
    fontFamily: "Montserrat",
  },
}));

const handleClick = () => {
  window.open("https://github.com/yash-93", "_blank");
};

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Typography className={classes.title}>Do.it</Typography>
        <Button
          className={classes.menuButton}
          color="inherit"
          onClick={handleClick}
        >
          <i className="fab fa-github fa-3x"></i>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
