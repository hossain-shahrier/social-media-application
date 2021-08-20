import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { NavLink, useHistory, useParams } from "react-router-dom";
import "./css/Task.css";

const EditTask = () => {
  let history = useHistory();
  const { id } = useParams();

  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const [taskName, setTaskName] = useState({
    task_name: "",
    email: "",
  });

  useEffect(() => {
    async function data() {
      const res = await axios.get(`http://localhost:8000/api/task/edit/${id}`);
      if (res.data.statusCode === 200) {
        setTaskName({
          task_name: res.data.task.task_name,
          email: res.data.task.email,
        });
      } else {
        console.log("Error");
      }
    }
    data();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.task_name === "" || taskName.task_name === null) {
      setErrorMessage({ value: "Please write your task" });
    }
    axios.defaults.withCredentials = true;
    axios.defaults.headers.post["content-type"] = "application/json";
    axios.defaults.headers.post["Accept"] = "application/json";
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      axios
        .put(`http://localhost:8000/api/task/edit/${id}`, taskName)
        .then((res) => {
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
      <NavLink to="/tasklist">
        <Button
          variant="outlined"
          color="primary"
          style={{ marginBottom: "40px" }}
        >
          Back
        </Button>
      </NavLink>

      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Edit your task</h2>
        <input
          placeholder="Enter your task"
          name="task_name"
          value={taskName.task_name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button type="submit" variant="outlined" color="primary">
          Update
        </Button>
      </form>
      <p style={{ color: "red" }}>{errorMessage.value}</p>
    </div>
  );
};

export default EditTask;
