import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Featured = () => {
  const percentage = 66;
  return (
    <div className="featured">
      <div className="top">
        <div className="title">title</div>
        <MoreVertIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredchart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={6}
          />
        </div>
        <p className="title">title of the chart</p>
        <p className="amount">200K</p>
        <p className="desc">description of the chart </p>
        <div className="summary">
          <div className="item">
            <p className="target">target</p>
            <div className="itemtarget positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <p className="targetvalue">280k</p>
            </div>
          </div>
          <div className="item">
            <p className="target">target</p>
            <div className="itemtarget negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <p className="targetvalue">280k</p>
            </div>
          </div>
          <div className="item">
            <p className="target">target</p>
            <div className="itemtarget positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <p className="targetvalue">280k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
