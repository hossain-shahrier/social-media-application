import { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./css/Task.css";

const Annauncement = () => {
  let history = useHistory();
  let email = localStorage.getItem("email");

  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const [announcementName, setAnnouncementName] = useState({
    announcement_name: "",
    email: email,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      announcementName.announcement_name === "" ||
      announcementName.announcement_name === null
    ) {
      setErrorMessage({ value: "Please write your announcement" });
    }
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost:8000/api/announcement", announcementName)
        .then((res) => {
          if (res.data.statusCode === 200) {
            history.push("/announcementlist");
            setErrorMessage({ value: "" });
          } else {
            setErrorMessage({ value: "Couldn't complete" });
          }
        });
    });
  };
  const handleChange = (e) => {
    setAnnouncementName({
      ...announcementName,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="create_task">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>What to say?</h2>
        <input
          placeholder="Enter your announcement"
          name="announcement_name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button type="submit" variant="outlined" color="primary">
          Shout
        </Button>
      </form>
      <p style={{ color: "red" }}>{errorMessage.value}</p>
    </div>
  );
};

export default Annauncement;
