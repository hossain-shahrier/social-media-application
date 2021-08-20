import Sidebar from "../Sidebar";
import { Avatar } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import axios from "axios";
import "./css/Home.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import VerticalBar from "./VerticalBar";
const Home = () => {
  const [total, setTotal] = useState({
    users: "",
    businesses: "",
    communities: "",
  });

  useEffect(() => {
    async function data() {
      const res = await axios.get("http://localhost:8000/api/total");
      if (res.data.statusCode === 200) {
        setTotal({
          users: res.data.users,
          businesses: res.data.businesses,
          communities: res.data.communities,
        });
      }
    }
    data();
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <div
        className="container"
        style={{ marginTop: "20px", marginLeft: "100px" }}
      >
        <div className="left__container">
          <div className="card">
            <Avatar
              className="card__avatar"
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/224584291_1471659063174309_5379151129670759615_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=skmzZvmlnmwAX_XjVU2&_nc_ht=scontent.fcgp7-1.fna&oh=9652fe084a0d1625582c7b17b06daedf&oe=61103634"
            />
            <h4>{localStorage.getItem("username")}</h4>
            <p>{localStorage.getItem("email")}</p>
          </div>
          <table>
            <thead>
              <tr className="table_header">
                <th>Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Users</td>
                <td>{total.users}</td>
              </tr>

              <tr>
                <td>Businesses</td>
                <td>{total.businesses}</td>
              </tr>
              <tr>
                <td>Communities</td>
                <td>{total.communities}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right__container" style={{ marginLeft: "50px" }}>
          <div className="card__container">
            <div className="card-two">
              <NavLink to="/task">
                <CreateIcon className="card-icon" style={{ color: "white" }} />
              </NavLink>
              <h4>What to do?</h4>
              <p>write and visit your next tasks</p>
            </div>
            <div className="card-three">
              <NavLink to="/announcement">
                <AnnouncementIcon
                  className="card-icon"
                  style={{ color: "white" }}
                />
              </NavLink>
              <h4>Make an announcement</h4>
              <p>make a shout</p>
            </div>
          </div>
          <div
            className="graph-container"
            style={{ marginLeft: "20px", marginTop: "50px" }}
          >
            <VerticalBar amount={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
