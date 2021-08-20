import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/Users.css";
import SearchIcon from "@material-ui/icons/Search";
const AnnouncementList = () => {
  const [mylist, setList] = useState({ list: "", loading: true });

  const search = async (e) => {
    e.preventDefault();
    setList({ ...mylist, [e.target.name]: e.target.value });
    let announcement_name = mylist.announcement_name;
    await axios
      .get(`http://localhost:8000/api/announcement/search/${announcement_name}`)
      .then((res) => {
        setList({
          list: res.data.announcement,
          loading: false,
        });
      });
  };
  useEffect(() => {
    async function data() {
      await axios
        .get("http://localhost:8000/api/announcementlist")
        .then((res) => {
          if (res.data.statusCode === 200) {
            setList({
              list: res.data.list,
              loading: false,
            });
          }
        });
    }
    data();
  }, []);

  let list_table;
  if (mylist.loading) {
    list_table = (
      <tbody>
        <tr>
          <td>Loading....</td>
        </tr>
      </tbody>
    );
  } else {
    list_table = mylist.list.map((list) => (
      <tbody key={list.announcement_name}>
        <tr>
          <td>{list.id}</td>
          <td>{list.announcement_name}</td>
        </tr>
      </tbody>
    ));
  }

  return (
    <div className="users">
      <Sidebar />
      <div className="container">
        <div className="left__container">
          <div
            className="left_container_location"
            style={{
              marginBottom: "15px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "22px",
              color: "gray",
              backgroundColor: "#e2eef1",
            }}
          >
            <SearchIcon />
            <input
              type="search"
              placeholder="Search for an announcement"
              style={{
                outline: "none",
                border: "none",
                background: "none",
                width: "20rem",
              }}
              name="announcement_name"
              onKeyUp={(e) => {
                search(e);
              }}
            />
          </div>

          <table className="table">
            <thead>
              <tr className="table_header">
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            {list_table}
          </table>
        </div>
        <div className="right__container"></div>
      </div>
    </div>
  );
};

export default AnnouncementList;
