import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import TodoItem from "./todoItem";
import EmptyList from "../assets/clip-list-is-empty.png";
import "../App.css";
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "75vh",
    overflowY: "hidden",
  },
  label: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "1.5%",
    color: "#403D52",
  },
}));

const DashboardContent = () => {
  const classes = useStyles();
  const [taskList, setTaskList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [currDay, setCurrDay] = useState();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const setDay = () => {
    let date = new Date();
    setCurrDay(days[date.getDay()]);
  };

  const getTasks = async () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/getTasks")
      .then((res) => {
        setTaskList(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setDay();
    getTasks();
  }, []);

  const changeHandler = (event) => {
    setNewItem(event.target.value);
  };

  const addNewItem = async () => {
    let newItemObj = {};
    newItemObj.status = false;
    newItemObj.title = newItem;
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/createTask", newItemObj)
      .then((res) => {
        newItemObj._id = res.data.task._id;
        setTaskList([...taskList, newItemObj]);
      });
    setNewItem("");
  };

  const removeItem = async (id) => {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + `/deleteTask/${id}`)
      .then((res) => {
        console.log(res.status);
        getTasks();
      });
  };

  return (
    <div className={classes.dashboard}>
      <label className={classes.label}>Have a productive {currDay}.</label>
      <div
        style={{
          width: "400px",
          borderRadius: "3px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 0 20px 0",
        }}
      >
        <input
          type="text"
          style={{
            border: "none",
            width: "85%",
            backgroundColor: "white",
            height: "40px",
            paddingLeft: "3%",
          }}
          placeholder="Add item..."
          value={newItem}
          onChange={changeHandler}
        />
        <div
          style={{
            width: "15%",
            backgroundColor: "white",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={addNewItem}
        >
          <i
            className="fas fa-plus"
            style={{ fontSize: "1.5em", cursor: "pointer" }}
          ></i>
        </div>
      </div>
      <div
        className="items"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <TodoItem
              key={task._id}
              title={task.title}
              status={task.status}
              id={task._id}
              removeItem={removeItem}
            />
          ))
        ) : (
          <div style={{ width: "350px", height: "100%" }}>
            <img
              src={EmptyList}
              alt="Empty image"
              style={{ width: "100%", height: "85%" }}
            />
            <label>Wohooo!!! You do not have any task do to.</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
