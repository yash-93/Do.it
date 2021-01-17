import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  cross: {
    cursor: "pointer",
    color: "red",
    fontSize: "2rem",
  },
  todoitem: {
    width: "500px",
    margin: "5px 0",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    padding: "1.2%",
    borderRadius: "5px",
  },
  check: {
    cursor: "pointer",
  },
  strike: {
    textDecoration: "line-through",
  },
}));

const TodoItem = ({ title, status, id, removeItem }) => {
  const [completed, setCompleted] = useState(status);

  const classes = useStyles();

  const deleteMe = () => {
    removeItem(id);
  };

  const updateStatus = () => {
    setCompleted(!completed);
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + `/updateTask/${id}`, {
        status: !completed,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.todoitem}>
      <div style={{ width: "10%" }}>
        {completed ? (
          <i
            className={`fas fa-check fa-2x ${classes.check}`}
            style={{ color: "green" }}
            onClick={updateStatus}
          ></i>
        ) : (
          <i
            className={`far fa-square ${classes.check}`}
            style={{ color: "red" }}
            onClick={updateStatus}
          ></i>
        )}
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "start",
          paddingLeft: "2%",
        }}
      >
        <label className={`${classes.title} ${completed && classes.strike}`}>
          {title}
        </label>
      </div>
      <div style={{ width: "10%" }}>
        <DeleteForeverIcon className={classes.cross} onClick={deleteMe} />
      </div>
    </div>
  );
};

export default TodoItem;
