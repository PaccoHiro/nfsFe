import { Flag } from "@mui/icons-material";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";
import SelectControl from "../select/SelectControl";
import "./discount.scss";

const DiscountSelect = ({ state, onUpdate }) => {
  const [Tvalue, setTValue] = useState({
    active: true,
    selDiscount: "",
    discValue: "",
  });

  const handleSwitchChange = (event) => {
    if (event.target.checked) {
      setTValue({ active: true, selDiscount: "", discValue: "" });
      onUpdate({ active: true, selDiscount: "", discValue: "" });
    } else {
      setTValue({ active: false, selDiscount: "", discValue: "" });
      onUpdate({ active: false, selDiscount: "", discValue: "" });
    }
  };
  const handleTFieldChange = (e) => {
    const newDiscObj = { ...Tvalue, [e.target.name]: e.target.value };
    setTValue(newDiscObj);
    onUpdate(newDiscObj); // to sync/inject with parent state
  };
  return (
    <fieldset className={`discount ${Tvalue.active}`}>
      <legend>
        <FormControlLabel
          label={Tvalue.active ? "Discount" : "Add Discount"}
          control={
            <Switch
              className="switchControl"
              checked={Tvalue.active}
              onChange={handleSwitchChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
      </legend>
      {Tvalue.active && (
        <div className="discountContainer">
          <label htmlFor="" className="selDiscLabel">
            Discount
          </label>
          <div className="discountWrapper">
            <div className="discSelect">
              <SelectControl
                onChange={(e) => handleTFieldChange(e)}
                value={""}
                name={"selDiscount"}
                optionsData={["Percentage", "Flat Amount"]}
                showLabel={false}
              />
            </div>
            <div className="discValue">
              <TextField
                className="discInputValue"
                onChange={(e) => {
                  handleTFieldChange(e);
                }}
                required
                name="discValue"
                value={state?.discValue ? state.discValue : Tvalue?.discValue}
                fullWidth
                size="small"
                label="Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </div>
          </div>
        </div>
      )}
    </fieldset>
  );
};

export default DiscountSelect;
