import React, { useState, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import DashboardContent from "../../components/dashboardContent";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(handleClose, 1000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {!open && <DashboardContent />}
    </React.Fragment>
  );
};

export default Dashboard;
