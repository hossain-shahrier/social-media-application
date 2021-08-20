import "../components/css/sidebar/SidebarOptions.css";

const SidebarOptions = ({ Icon }) => {
  return (
    <div className="SidebarOptions">
      {Icon && <Icon className="SidebarOptions__icon" />}
    </div>
  );
};

export default SidebarOptions;
