import "./css/navbar/Navbar.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import NavbarOptions from "./NavbarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import { NavLink, useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";

const Navbar = () => {
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/logout");

    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  var AuthButtons = "";
  if (!localStorage.getItem("token")) {
    AuthButtons = (
      <div>
        <NavbarOptions title="Register" Icon={BubbleChartIcon} />
      </div>
    );
  } else {
    AuthButtons = (
      <>
        <NavLink to="/">
          <NavbarOptions title="Home" Icon={HomeIcon} />
        </NavLink>

        {/* <NavbarOptions title="My Panel" Icon={SupervisorAccountIcon} /> */}
        <NavLink to="/coffeeroom">
          <NavbarOptions title="Coffee room" Icon={FreeBreakfastIcon} />
        </NavLink>
        {/* <NavLink to="/chat">
          <NavbarOptions title="Messaging" Icon={ChatIcon} />
        </NavLink>
        <NavbarOptions title="Notifications" Icon={NotificationsIcon} /> */}
        <NavbarOptions
          title={localStorage.getItem("username")}
          avatar="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/224584291_1471659063174309_5379151129670759615_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=skmzZvmlnmwAX_XjVU2&_nc_ht=scontent.fcgp7-1.fna&oh=9652fe084a0d1625582c7b17b06daedf&oe=61103634"
        />
        <IconButton
          onClick={(e) => {
            handleClick(e);
          }}
          style={{ marginRight: "10px", marginTop: "-10px" }}
        >
          <ExitToAppIcon />
        </IconButton>
      </>
    );
  }
  return (
    <div className="nav">
      <div className="left_container">
        <NavLink to="/">
          <p>Logo</p>
        </NavLink>

        <div className="left_container_location">
          <LocationOnIcon />
          <input type="text" />
        </div>
      </div>
      <div className="right_container">{AuthButtons}</div>
    </div>
  );
};

export default Navbar;
