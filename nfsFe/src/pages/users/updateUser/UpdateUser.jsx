import New from "../../../components/new/New";
import { userFormData } from "../../../helpers/dataSource/formInputData";
import "./UpdateUser.scss";

const UpdateUser = () => {
  return (
    <div className="updateUser">
      <New formData={userFormData} />
    </div>
  );
};
export default UpdateUser;
