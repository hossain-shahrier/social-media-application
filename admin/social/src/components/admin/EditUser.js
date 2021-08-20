import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import ReceiptIcon from "@material-ui/icons/Receipt";
import "./css/EditUser.css";
import { Button } from "@material-ui/core";
const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    status: "",
  });
  useEffect(() => {
    async function data() {
      const res = await axios.get(`http://localhost:8000/api/user/edit/${id}`);
      if (res.data.statusCode === 200) {
        setUser({
          name: res.data.user.name,
          email: res.data.user.email,
          status: res.data.user.status,
        });
      } else {
        console.log("Error");
      }
    }
    data();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/user/edit/${id}`, user);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit__user">
      <Sidebar />
      <div className="container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="edit_user_info">
            <PersonIcon />
            <input
              placeholder="Enter username"
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <EmailIcon />
            <input
              placeholder="Enter email address"
              type="text"
              name="email"
              value={user.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <ReceiptIcon />
            <input
              placeholder="Enter user status"
              type="text"
              name="status"
              value={user.status}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <Button type="submit" variant="outlined" color="primary">
            Edit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
