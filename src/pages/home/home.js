import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

import Illustration from "../../assets/todo-illustration.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "92vh",
  },
  cols: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    width: "75%",
  },
  button: {
    backgroundColor: "#6C63FF",
    fontFamily: "Montserrat",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#4B40FF",
    },
  },
}));

const Home = ({ handleOpen }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} fluid>
      <Row className="justify-content-lg-center" style={{ height: "100%" }}>
        <Col className={`${classes.cols}`} lg="6" style={{ padding: "0 5%" }}>
          <Box>
            <label
              style={{
                fontSize: "3em",
                color: "#403d52",
              }}
            >
              Make <strong>200%</strong> of you.
              <br></br>
              <strong>Everyday</strong>
            </label>
            <p
              style={{
                fontSize: "1rem",
                color: "#403d52",
              }}
            >
              Tired of noting down your tasks on a piece of paper? We present to
              you an easy to use application to manage your daily schedule and
              see your progress.
            </p>
            <Button
              className={classes.button}
              variant="contained"
              disableElevation
              onClick={() => handleOpen}
            >
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                Get Started
              </Link>
            </Button>
          </Box>
        </Col>
        <Col className={classes.cols} lg="6">
          <CardMedia
            component="img"
            className={classes.media}
            image={Illustration}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
