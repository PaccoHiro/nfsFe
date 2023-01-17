import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./selectControl.scss";

const SelectControl = ({
  onChange,
  value,
  name,
  selectDataForm,
  optionsData,
  // initValue,// replaced by value ?
  showLabel = true,
}) => {
  const [selectedValue, setSelectedValue] = useState(value ? value : "");

  const handleChangeSelect = (event) => {
    setSelectedValue(event.target.value);
    value = event.target.value;
    onChange(event);
  };
  return (
    <div className="selectWrapper">
      <FormControl variant="standard" className="selectfcontrol">
        {showLabel && (
          <InputLabel
            id={selectDataForm?.labelId ? selectDataForm.labelId : "label"}
          >
            {selectDataForm?.labelId ? selectDataForm.labelId : "label"}
          </InputLabel>
        )}
        <Select
          // size="small"
          name={name ? name : ""}
          className="select"
          labelId={selectDataForm?.labelId ? selectDataForm.labelId : "label"}
          id={selectDataForm?.id ? selectDataForm.id : "select"}
          value={selectedValue}
          label={selectDataForm?.label ? selectDataForm.label : "options"}
          onChange={handleChangeSelect}
        >
          {optionsData &&
            optionsData.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectControl;
