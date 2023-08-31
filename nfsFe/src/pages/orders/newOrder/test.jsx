import "./newOrder.scss";

import GrpOrderRows from "../../../components/grpOrderRows/GrpOrderRows";

import { useReducer } from "react";
import {
  INIT_STATE,
  newOrderReducer,
} from "../../../helpers/reducers/newOrderReducer";
import DiscountSelect from "../../../components/discount/Discount";
import { useNavigate } from "react-router-dom";
import ShippingModeInput from "../../../components/shippingModeInput/ShippingModeInput";
import OrderFormInput from "../../../components/orderFormInput/orderFormInput";
import {
  handleSelect,
  handleShipSelect,
  updateDiscountSelect,
  updateGrpOrderRows,
} from "../../../helpers/reducers/actionsReducer";

const NewOrder = () => {
  const [state, dispatch] = useReducer(newOrderReducer, INIT_STATE);
  const handleGrpOrderRowsUpdate = (updatedOrderArray) => {
    updateGrpOrderRows(dispatch, updatedOrderArray);
  };
  const handleDiscountSelectUpdate = (updatedDiscObj) => {
    updateDiscountSelect(dispatch, updatedDiscObj);
  };
  // const handleSelect = (e) => {
  //   dispatch({
  //     type: "SEL_CHANGE",
  //     payload: { name: e.target.name, value: e.target.value },
  //   });
  // };

  // const updateGrpOrderRows = (orderArray) => {
  //   dispatch({
  //     type: "ORDER_LIST_CHANGE",
  //     payload: orderArray,
  //   });
  // };
  // const updateDiscountSelect = (discObj) => {
  //   dispatch({
  //     type: "DISCOUNT_CHANGE",
  //     payload: discObj,
  //   });
  // };
  // const handleShipSelect = (e) => {
  //   dispatch({
  //     type: "SEL_SHIP_CHANGE",
  //     payload: { name: e.target.name, value: e.target.value },
  //   });
  // };
  const navigate = useNavigate();

  // console.log(state);

  return (
    <div className="newOrderContainer">
      <div className="newOrder">
        <div className="title">Add New : </div>
        <form>
          <div className="formwrapper">
            <div className="left">
              <OrderFormInput
                label="Customer"
                inputId="selCustomer"
                inputType="select"
                onChange={(e) => handleSelect(dispatch, e)}
                name="selCustomer"
                value={state?.selCustomer ? state.selCustomer : ""}
                optionsData={["A", "B", "C"]}
                showLabel={false}
              />
              <OrderFormInput
                label="Shipping Address"
                inputId="shipAdress"
                inputType="text"
                required
                onChange={(e) => handleSelect(dispatch, e)}
                name="shipAdress"
                value={state?.shipAdress ? state.shipAdress : ""}
                placeholder="placeholder"
              />
              <OrderFormInput
                label="Shipping City"
                inputId="shipCity"
                inputType="text"
                required
                onChange={(e) => handleSelect(dispatch, e)}
                name="shipCity"
                value={state?.shipCity ? state.shipCity : ""}
                placeholder="placeholder"
              />
              {/* trying to encapsulate shippingmodeinput */}
              <ShippingModeInput
                state={state}
                handleShipSelect={(e) => handleShipSelect(dispatch, e)}
                handleSelect={(e) => handleSelect(dispatch, e)}
              />
              <OrderFormInput
                label="Status"
                inputId="selStatus"
                inputType="select"
                onChange={(e) => handleSelect(dispatch, e)}
                name="selStatus"
                value=""
                optionsData={["Pending", "Delivered", "Canceled"]}
                showLabel={false}
              />
            </div>
            <div className="right">
              <div className="grpOrderRowsWrapper">
                <GrpOrderRows onUpdate={handleGrpOrderRowsUpdate} />
              </div>
              <div className="discountSelectWrapper">
                <DiscountSelect onUpdate={handleDiscountSelectUpdate} />
              </div>
            </div>
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
    </div>
  );
};
export default NewOrder;
