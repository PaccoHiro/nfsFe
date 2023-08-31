import { useNavigate } from "react-router-dom";
import orderFormData from "../../helpers/dataSource/orderFormLayout";
import renderComponent from "../renderOrderComponent/renderOrderComponent";
import "./neworderform.scss";
import {
  handleSelect,
  handleShipSelect,
  updateDiscountSelect,
  updateGrpOrderRows,
} from "../../helpers/reducers/actionsReducer";
import { newOrderReducer } from "../../helpers/reducers/newOrderReducer";
import { useReducer } from "react";

const NewOrderForm = ({ formDataValues }) => {
  const navigate = useNavigate();
  console.log("fordatavalues", formDataValues);

  // Construct FormDataLayout based on formDataValues
  const FormDataLayout = formDataValues
    ? orderFormData
        .filter((item) => Object.keys(formDataValues).includes(item.label))
        .map((item) => ({
          ...item,
          value: formDataValues[item.label],
        }))
    : orderFormData;
  const [state, dispatch] = useReducer(
    newOrderReducer,
    formDataValues ? formDataValues : {}
  ); // initialize  reducers state
  //   console.log("state", state);
  const handleGrpOrderRowsUpdate = (updatedOrderArray) => {
    updateGrpOrderRows(dispatch, updatedOrderArray);
  };
  const handleDiscountSelectUpdate = (updatedDiscObj) => {
    updateDiscountSelect(dispatch, updatedDiscObj);
  };

  return (
    <div className="newOrder">
      <div className="title">Add New : </div>
      <form>
        <div className="formwrapper">
          <div className="left">
            {/* form data structure is separated from your React component, making both easier to maintain */}
            {FormDataLayout.filter((item) => item.position === "left").map(
              (input) =>
                renderComponent(
                  input,
                  state,
                  dispatch,
                  handleShipSelect,
                  handleSelect,
                  handleGrpOrderRowsUpdate,
                  handleDiscountSelectUpdate
                )
            )}
          </div>
          {FormDataLayout.some((item) => item.position === "right") && (
            <div className="right">
              {FormDataLayout.filter((item) => item.position === "right").map(
                (input) =>
                  renderComponent(
                    input,
                    state,
                    dispatch,
                    handleShipSelect,
                    handleSelect,
                    handleGrpOrderRowsUpdate,
                    handleDiscountSelectUpdate
                  )
              )}
            </div>
          )}
        </div>
        <div className="grpBtnWrap">
          <div className="grpbuttons">
            <button
              className="submitbutton"
              onClick={(e) => e.preventDefault()}
            >
              Submit
            </button>
            <button
              className="cancelbutton"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewOrderForm;
