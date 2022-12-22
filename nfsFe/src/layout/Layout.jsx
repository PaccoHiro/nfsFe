import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.scss";
const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebarcontainer">
        <Sidebar />
      </div>
      <div className="pagecontainer">
        <div className="navcontainer">
          <Navbar />
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
