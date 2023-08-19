import "./newUser.scss";
import New from "../../../components/new/New";
import { userFormData } from "../../../helpers/dataSource/formInputData";

const NewUser = () => {
  return (
    <div className="newUser">
      <New formData={userFormData} />
    </div>
  );
};
export default NewUser;
