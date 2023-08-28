import {
  customerFormData,
  itemFormData,
} from "../../helpers/dataSource/formInputData";
import New from "../new/New";
import "./modal.scss";

const Modal = ({ onClose, modalFormData, slug }) => {
  const formDataLayout = slug === "customer" ? customerFormData : itemFormData; // layout of the modal
  console.log(slug);
  return (
    <div className="overlay">
      <div className="modalContainer">
        {/* <div className="top">top</div>
        <div className="mid">middle</div>
        <div className="grpbtn">
          <button onClick={() => onClose(false)}> close </button>
        </div> */}
        <New formData={formDataLayout} formDataValues={modalFormData} />
      </div>
    </div>
  );
};
export default Modal;
