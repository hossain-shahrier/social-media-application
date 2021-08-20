import "./css/sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";
import SidebarOptions from "./SidebarOptions";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import GroupIcon from "@material-ui/icons/Group";
import PolicyIcon from "@material-ui/icons/Policy";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListAltIcon from "@material-ui/icons/ListAlt";
import StorageIcon from "@material-ui/icons/Storage";
// import EmailIcon from "@material-ui/icons/Email";
// import SettingsIcon from "@material-ui/icons/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top__section"></div>
      <div className="sidebar__menu">
        <NavLink to="/users">
          <SidebarOptions Icon={AccountBoxIcon} />
        </NavLink>
        <NavLink to="/businesses">
          <SidebarOptions Icon={BusinessCenterIcon} />
        </NavLink>
        <NavLink to="/communities">
          <SidebarOptions Icon={GroupIcon} />
        </NavLink>
        <NavLink to="/tasklist">
          <SidebarOptions Icon={ListAltIcon} />
        </NavLink>
        <NavLink to="/announcementlist">
          <SidebarOptions Icon={StorageIcon} />
        </NavLink>
        <NavLink to="/privacy">
          <SidebarOptions Icon={PolicyIcon} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
