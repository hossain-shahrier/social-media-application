/* eslint-disable no-lone-blocks */
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/Users.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import { NavLink } from "react-router-dom";
const Users = () => {
  const [myusers, setUsers] = useState({ users: [], loading: true });

  const deleteAction = async (id) => {
    const res = await axios.delete(
      `http://localhost:8000/api/user/delete/${id}`
    );
    setUsers({ users: res.data.users, loading: false });
  };
  const statusAction = async (id) => {
    const res = await axios.put(`http://localhost:8000/api/user/action/${id}`);
    setUsers({ users: res.data.users, loading: false });
  };
  useEffect(() => {
    async function data() {
      const res = await axios.get("http://localhost:8000/api/users");
      if (res.data.statusCode === 200) {
        setUsers({
          users: res.data.users,
          loading: false,
        });
      }
    }
    data();
  }, []);

  let user_table;
  if (myusers.loading) {
    user_table = (
      <tbody>
        <tr>
          <td>Loading....</td>
        </tr>
      </tbody>
    );
  } else {
    user_table = myusers.users.map((user) => (
      <tbody key={user.name}>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.status}</td>
          <td>
            <NavLink to={`/user/edit/${user.id}`}>
              <EditIcon className="table__icon" />
            </NavLink>
          </td>
          <td>
            <DeleteIcon
              className="table__icon"
              onClick={() => {
                deleteAction(user.id);
              }}
            />
          </td>
          <td>
            <PowerSettingsNewIcon
              className="table__icon"
              onClick={() => {
                statusAction(user.id);
              }}
            />
          </td>
          <td>
            <MessageSharpIcon className="table__icon" />
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
                <th>Email</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Action</th>
                <th>Message</th>
              </tr>
            </thead>
            {user_table}
          </table>
        </div>
        <div className="right__container"></div>
      </div>
    </div>
  );
};

export default Users;
