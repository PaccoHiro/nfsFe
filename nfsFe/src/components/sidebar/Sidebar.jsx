import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logocontainer">logo</div>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul className="sbul">
          <div className="listtitle"> Main </div>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashbord</span>
          </li>
          <div className="listtitle"> Lists </div>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <PeopleOutlineIcon className="icon" />
            <span>Customers</span>
          </li>
          <li>
            <LocalMallIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <div className="listtitle"> User </div>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Profil</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Setings</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};
export default Sidebar;
