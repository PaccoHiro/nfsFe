import "./newOrder.scss";
import New from "../../../components/new/New";
import { customerFormData } from "../../../helpers/dataSource/formInputData";

import OrderRow from "../../../components/dropDown/OrderRow";
import GrpOrderRows from "../../../components/grpOrderRows/GrpOrderRows";
import SelectControl from "../../../components/select/SelectControl";

const NewOrder = () => {
  return (
    <div className="newOrderContainer">
      <div className="newOrder">
        {/* <New formData={customerFormData} /> */}

        <div className="title">Add New : </div>
        <form>
          <div className="formwrapper">
            <div className="left">
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Customer {/* {dataInput.label} */}
                </label>
                <SelectControl
                  optionsData={["A", "B", "C"]}
                  showLabel={false}
                />
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Shipping Adress {/* {dataInput.label} */}
                </label>
                <input
                  type="text" //{dataInput.type}
                  className="inputvalue"
                  placeholder="placeholder" //{dataInput.placeholder}
                />
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Shipping City {/* {dataInput.label} */}
                </label>
                <input
                  type="text" //{dataInput.type}
                  className="inputvalue"
                  placeholder="placeholder" //{dataInput.placeholder}
                />
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Shipping Mode {/* {dataInput.label} */}
                </label>
                <SelectControl
                  optionsData={["ShipperA", "ShipperB", "ShipperC"]}
                  showLabel={false}
                />
              </div>
              <div className="forminput">
                <label htmlFor="" className="inputkey">
                  Status {/* {dataInput.label} */}
                </label>
                <SelectControl
                  optionsData={["Pending", "Delivered", "Canceled"]}
                  showLabel={false}
                />
              </div>
            </div>
            <div className="right">
              <GrpOrderRows />
            </div>
          </div>

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
        </form>
      </div>
    </div>
  );
};
export default NewOrder;
