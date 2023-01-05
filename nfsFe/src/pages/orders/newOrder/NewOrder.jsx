import "./newOrder.scss";
import New from "../../../components/new/New";
import { customerFormData } from "../../../helpers/dataSource/formInputData";

const NewOrder = () => {
  return (
    <div className="newOrder">
      <New formData={customerFormData} />
    </div>
  );
};
export default NewOrder;
