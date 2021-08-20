import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/Users.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
const TaskList = () => {
  const [mytasks, setTasks] = useState({ tasks: "", loading: true });

  const deleteAction = (id) => {
    axios.delete(`http://localhost:8000/api/task/delete/${id}`).then((res) => {
      setTasks({ tasks: res.data.task, loading: false });
    });
  };

  useEffect(() => {
    async function data() {
      await axios.get("http://localhost:8000/api/tasks").then((res) => {
        if (res.data.statusCode === 200) {
          setTasks({
            tasks: res.data.tasks,
            loading: false,
          });
        }
      });
    }
    data();
  }, []);
  let task_table;
  if (mytasks.loading) {
    task_table = (
      <tbody>
        <tr>
          <td>Loading....</td>
        </tr>
      </tbody>
    );
  } else {
    task_table = mytasks.tasks.map((task) => (
      <tbody key={task.task_name}>
        <tr>
          <td>{task.task_name}</td>
          <td>
            <NavLink to={`/task/edit/${task.id}`}>
              <EditIcon className="table__icon" />
            </NavLink>
          </td>
          <td>
            <DeleteIcon
              className="table__icon"
              onClick={() => {
                deleteAction(task.id);
              }}
            />
          </td>
        </tr>
      </tbody>
    ));
  }

  return (
    <div className="users">
      <Sidebar />
      <div className="container">
        <div className="left__container">
          <table className="table">
            <thead>
              <tr className="table_header">
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {task_table}
          </table>
        </div>
        <div className="right__container"></div>
      </div>
    </div>
  );
};

export default TaskList;
