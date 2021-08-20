import "./css/Auth.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Auth = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  const handleClick = (e) => {
    if (user.email === "" || user.password === "") {
      setErrorMessage({
        value: "Empty username or password",
      });
    }
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      axios.post("http://localhost:8000/api/login", user).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("password", res.data.password);
          localStorage.setItem("email", res.data.email);
          history.push("/");
        } else if (res.data.status === 401) {
          console.log(res.data.message);
        } else {
          setErrorMessage({ value: "Invalid email or password" });
        }
      });
    });
  };
  const handleChange = (e) => {
    setErrorMessage({
      value: "",
    });
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="auth">
      <div className="container">
        <form>
          <input
            style={{
              padding: "10px",
              border: "none",
              margin: "10px",
              backgroundColor: "whitesmoke",
            }}
            type="email"
            placeholder="Enter email address"
            name="email"
            value={user.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br></br>
          <input
            style={{
              padding: "10px",
              border: "none",
              margin: "10px",
              backgroundColor: "whitesmoke",
            }}
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br></br>
          <button
            style={{
              outline: "none",
              border: "none",
              padding: "7px 10px",
              margin: "10px",
              cursor: "pointer",
              color: "white",
              borderRadius: "5px",
              backgroundColor: "rgba(66, 183, 245,0.8)",
            }}
            type="submit"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Login
          </button>
          <br></br>
          <p style={{ fontSize: "12px", color: "red", marginLeft: "10px" }}>
            {errorMessage.value}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
