import "./newOrder.scss";
import New from "../../../components/new/New";
import { customerFormData } from "../../../helpers/dataSource/formInputData";

import OrderRow from "../../../components/dropDown/OrderRow";
import GrpOrderRows from "../../../components/grpOrderRows/GrpOrderRows";

const NewOrder = () => {
  return (
    <div className="newOrder">
      {/* <New formData={customerFormData} /> */}
      <GrpOrderRows />
    </div>
  );
};
export default NewOrder;
