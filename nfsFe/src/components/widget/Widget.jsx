import "./widget.scss";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">Orders</div>
        <div className="counter">100</div>
        <div className="link">see all Orders</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpOutlinedIcon className="pericon" />
          <span>20%</span>
        </div>

        <ShoppingCartOutlinedIcon className="icon" />
      </div>
    </div>
  );
};
export default Widget;
