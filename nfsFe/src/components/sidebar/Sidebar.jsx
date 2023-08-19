import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logocontainer">
          <Link className="link" to={"/"}>
            logo
          </Link>
        </div>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul className="sbul">
          <div className="listtitle"> Main </div>
          <li>
            <Link className="link" to={"/"}>
              <DashboardIcon className="icon" />
              <span> Dashbord</span>
            </Link>
          </li>
          <div className="listtitle"> Lists </div>
          <li>
            <Link className="link" to={"/items"}>
              <StoreIcon className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/customers"}>
              <PeopleOutlineIcon className="icon" />
              <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/orders"}>
              <LocalMallIcon className="icon" />
              <span>Orders</span>
            </Link>
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
