import {
  customerFormData,
  itemFormData,
} from "../../helpers/dataSource/formInputData";
import orderFormData from "../../helpers/dataSource/orderFormLayout";
import New from "../new/New";
import NewOrderForm from "../newOrderForm/NewOrderForm";
import "./modal.scss";

const Modal = ({ onClose, modalFormData, slug }) => {
  const FormDataLayoutComponent = (slug) => {
    switch (slug) {
      case "customer":
        return (
          <New formData={customerFormData} formDataValues={modalFormData} />
        );
      case "item":
        return <New formData={itemFormData} formDataValues={modalFormData} />;
      case "order":
        return <NewOrderForm formDataValues={modalFormData} />;
      default:
        return <>Undefined</>;
    }
  };

  // layout of the modal
  console.log(slug);

  return (
    <div className="overlay">
      <div className="modalContainer">
        {/* <div className="top">top</div>
        <div className="mid">middle</div>
        <div className="grpbtn">
          <button onClick={() => onClose(false)}> close </button>
        </div> */}
        {slug === "order" && <NewOrderForm formDataValues={modalFormData} />}
        {slug === "item" && (
          <New formData={itemFormData} formDataValues={modalFormData} />
        )}
        {slug === "customer" && (
          <New formData={customerFormData} formDataValues={modalFormData} />
        )}
        {/* <New formData={formDataLayout} formDataValues={modalFormData} /> */}
        {/* <FormDataLayoutComponent slug /> */}
      </div>
    </div>
  );
};
export default Modal;
