import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="inputsearch">
        <input type="text" placeholder="Search..." />
        <SearchIcon className="icon" />
      </div>
      <div className="items">
        <div className="item">
          <Brightness4OutlinedIcon className="icon" />
        </div>
        <div className="item">
          <NotificationsNoneIcon className="icon" />
          <div className="counter">5</div>
        </div>
        <div className="item">
          <MailOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ReorderOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
