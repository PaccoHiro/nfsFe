import "./newCustomer.scss";
import New from "../../../components/new/New";
import { customerFormData } from "../../../helpers/dataSource/formInputData";

const NewCustomer = () => {
  return (
    <div className="newCustomer">
      <New formData={customerFormData} />
    </div>
  );
};
export default NewCustomer;
