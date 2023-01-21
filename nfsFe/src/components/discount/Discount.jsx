import { FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";
import SelectControl from "../select/SelectControl";
import "./discount.scss";

const DiscountSelect = ({ state }) => {
  const [checked, setChecked] = useState(true);

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    // event.target.checked
    //   ? setOrderRowsList([{ id: 0, data: "" }])
    //   : setOrderRowsList("");
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
            test Discount
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
                //   onChange={(e) => {
                //     handleSelect(e);
                //   }}
                required
                name="DiscValue"
                value={state?.discValue ? state.discValue : ""}
                fullWidth
                size="small"
                id="standard-number"
                label="Number"
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
