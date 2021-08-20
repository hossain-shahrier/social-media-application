import { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./css/Task.css";

const Task = () => {
  let history = useHistory();
  let email = localStorage.getItem("email");

  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const [taskName, setTaskName] = useState({
    task_name: "",
    email: email,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.task_name === "" || taskName.task_name === null) {
      setErrorMessage({ value: "Please write your task" });
    }
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      axios.post("http://localhost:8000/api/task", taskName).then((res) => {
        if (res.data.statusCode === 200) {
          history.push("/tasklist");
          setErrorMessage({ value: "" });
        } else {
          setErrorMessage({ value: "Couldn't complete" });
        }
      });
    });
  };
  const handleChange = (e) => {
    setTaskName({
      ...taskName,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="create_task">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>What to do?</h2>
        <input
          placeholder="Enter your task"
          name="task_name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </form>
      <p style={{ color: "red" }}>{errorMessage.value}</p>
    </div>
  );
};

export default Task;
