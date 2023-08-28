import { Link } from "react-router-dom";
import "./actionsColumns.scss";

const ActionsColumn = ({ id, slug }) => {
  return (
    <div className="cellActions">
      <div className="view">
        <Link className="actionLink" to={`/${slug}/${id}`}>
          View
        </Link>
      </div>
      <div className="delete">Delete</div>
    </div>
  );
};
export default ActionsColumn;
