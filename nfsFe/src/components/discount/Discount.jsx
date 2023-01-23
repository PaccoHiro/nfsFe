import { FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";
import SelectControl from "../select/SelectControl";
import "./discount.scss";

const DiscountSelect = ({ state }) => {
  const [checked, setChecked] = useState(true);
  const [Tvalue, setTValue] = useState("");

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    // event.target.checked
    //   ? setOrderRowsList([{ id: 0, data: "" }])
    //   : setOrderRowsList("");
  };
  const handleTFieldChange = (e) => {
    setTValue(e.target.value);
  };
  return (
    <fieldset className={`discount ${checked}`}>
      <legend>
        <FormControlLabel
          label={checked ? "Discount" : "Add Discount"}
          control={
            <Switch
              className="switchControl"
              checked={checked}
              onChange={handleSwitchChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
      </legend>
      {checked && (
        <div className="discountContainer">
          <label htmlFor="" className="selDiscLabel">
            Discount
          </label>
          <div className="discountWrapper">
            <div className="discSelect">
              <SelectControl
                //   onChange={(e) => handleSelect(e)}
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
                name="DiscValue"
                value={state?.discValue ? state.discValue : Tvalue}
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
