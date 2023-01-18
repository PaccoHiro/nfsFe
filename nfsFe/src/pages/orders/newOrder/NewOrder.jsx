import "./newOrder.scss";
import New from "../../../components/new/New";
import { customerFormData } from "../../../helpers/dataSource/formInputData";

import OrderRow from "../../../components/dropDown/OrderRow";
import GrpOrderRows from "../../../components/grpOrderRows/GrpOrderRows";
import SelectControl from "../../../components/select/SelectControl";
import { TextField } from "@mui/material";
import { useReducer } from "react";
import {
  INIT_STATE,
  newOrderReducer,
} from "../../../helpers/reducers/newOrderReducer";

const NewOrder = () => {
  const [state, dispatch] = useReducer(newOrderReducer, INIT_STATE);
  const handleSelect = (e) => {
    dispatch({
      type: "SEL_CHANGE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const updateGrpOrderRows = (orderArray) => {
    dispatch({
      type: "ORDER_LIST_CHANGE",
      payload: orderArray,
    });
  };
  const handleShipSelect = (e) => {
    dispatch({
      type: "SEL_SHIP_CHANGE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  console.log(state);

  return (
    <div className="newOrderContainer">
      <div className="newOrder">
        <div className="title">Add New : </div>
        <form>
          <div className="formwrapper">
            <div className="left">
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Customer
                </label>
                <SelectControl
                  onChange={(e) => handleSelect(e)}
                  name={"selCustomer"}
                  value={""}
                  optionsData={["A", "B", "C"]}
                  showLabel={false}
                />
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Shipping Adress
                </label>
                <input
                  required
                  onChange={(e) => handleSelect(e)}
                  name="shipAdress"
                  value={state?.shipAdress ? state.shipAdress : ""}
                  type="text"
                  className="inputvalue"
                  placeholder="placeholder"
                />
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Shipping City
                </label>
                <input
                  required
                  onChange={(e) => handleSelect(e)}
                  name="shipCity"
                  value={state?.shipCity ? state.shipCity : ""}
                  type="text"
                  className="inputvalue"
                  placeholder="placeholder"
                />
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Shipping Mode
                </label>
                <div className="shipWrapper">
                  <div className="shipSelect">
                    <SelectControl
                      onChange={(e) => {
                        handleShipSelect(e);
                      }}
                      value={""}
                      name={"selShipMode"}
                      optionsData={[
                        "ShipperA",
                        "ShipperB",
                        "ShipperC",
                        "Others",
                      ]}
                      showLabel={false}
                    />
                  </div>
                  <div className="shipCost">
                    <TextField
                      onChange={(e) => {
                        handleSelect(e);
                      }}
                      required
                      name="shipCost"
                      value={state?.shipCost ? state.shipCost : ""}
                      fullWidth
                      size="small"
                      id="standard-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        readOnly: state.selShipMode === "Others" ? false : true,
                      }}
                      variant="standard"
                    />
                  </div>
                </div>
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Status
                </label>
                <SelectControl
                  onChange={(e) => handleSelect(e)}
                  value={""}
                  name={"selStatus"}
                  optionsData={["Pending", "Delivered", "Canceled"]}
                  showLabel={false}
                />
              </div>
            </div>
            <div className="right">
              <GrpOrderRows onUpdate={updateGrpOrderRows} />
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
                onClick={(e) => e.preventDefault()}
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
