import "./shippingModeInput.scss";
import SelectControl from "../select/SelectControl";
import { TextField } from "@mui/material"; // Assuming you're using Material-UI's TextField

const ShippingModeInput = ({ state, handleShipSelect, handleSelect }) => {
  return (
    <div className="forminput">
      <label htmlFor="selShipMode" className="inputkey">
        Shipping Mode
      </label>
      <div className="shipWrapper">
        <div className="shipSelect">
          <SelectControl
            onChange={handleShipSelect}
            value={state?.selShipMode ? state.selShipMode : ""}
            name="selShipMode"
            optionsData={["ShipperA", "ShipperB", "ShipperC", "Others"]}
            showLabel={false}
          />
        </div>
        <div className="shipCost">
          <TextField
            onChange={handleSelect}
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
              readOnly: state?.selShipMode === "Others" ? false : true,
            }}
            variant="standard"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingModeInput;
