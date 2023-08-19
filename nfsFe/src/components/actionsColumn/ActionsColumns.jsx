import { Link } from "react-router-dom";
import "./actionsColumns.scss";

const ActionsColumn = () => {
  return (
    <div className="cellActions">
      <div className="view">
        <Link className="link" to={"123456789"}>
          View
        </Link>
      </div>
      <div className="delete">Delete</div>
    </div>
  );
};
export default ActionsColumn;
