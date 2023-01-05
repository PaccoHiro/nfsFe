import "./newItem.scss";
import New from "../../../components/new/New";
import { itemFormData } from "../../../helpers/dataSource/formInputData";

const NewItem = () => {
  return (
    <div className="newitem">
      <New formData={itemFormData} />
    </div>
  );
};
export default NewItem;
