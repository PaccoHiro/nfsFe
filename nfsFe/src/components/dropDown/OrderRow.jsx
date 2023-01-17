import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./orderRow.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const options1 = [1, 2];
const GrpOptions2 = {
  1: ["a1", "b1"],
  2: ["a2", "b2"],
  3: ["a3", "b3"],
};
const GrpOptions3 = {
  a1: ["aa1OP", "ab1OP"],
  a2: ["aa2OP", "ab2OP"],
  a3: ["aa3OP", "ab3OP"],
  b1: ["ba1OP", "bb1OP"],
  b2: ["ba2OP", "bb2OP"],
  b3: ["ba3OP", "bb3OP"],
};
// think to make it dynamic (user can define nb of selects and their data) => TBD
const OrderRow = ({ orderRowData, addRowHandler, deleteRowHandler }) => {
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [qtyValue, setQtyValue] = useState(0);
  //   const [options2 , setOptions2]= useState("")

  const handleChangeSelect1 = (event) => {
    setSelectedValue1(event.target.value);
    setSelectedValue2("");
    setSelectedValue3("");
    setQtyValue("");
  };
  const handleChangeSelect2 = (event) => {
    setSelectedValue2(event.target.value);

    setSelectedValue3("");
    setQtyValue("");
  };
  const handleChangeSelect3 = (event) => {
    setSelectedValue3(event.target.value);
    setQtyValue("");
  };
  const handleChangeQtySelect = (event) => {
    setQtyValue(event.target.value);
  };
  //   console.log(qtyValue);
  return (
    <div key={orderRowData.id} className="ddContainer">
      <div className="selContainer">
        <FormControl className="selectfcontrol">
          <InputLabel id="label">options1</InputLabel>
          <Select
            // size="small"
            variant="standard"
            className="select"
            labelId="label"
            id="select1"
            value={selectedValue1}
            label="options1"
            onChange={handleChangeSelect1}
          >
            {options1 &&
              options1.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>

      <div className="selContainer">
        <FormControl className="selectfcontrol">
          <InputLabel id="label2">options2 </InputLabel>
          <Select
            // size="small"
            variant="standard"
            className="select"
            labelId="label2"
            id="select2"
            value={selectedValue2}
            label="options2"
            onChange={handleChangeSelect2}
          >
            {GrpOptions2[selectedValue1] &&
              GrpOptions2[selectedValue1].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="selContainer">
        <FormControl className="selectfcontrol">
          <InputLabel id="label3">options3 </InputLabel>
          <Select
            // size="small"
            variant="standard"
            className="select"
            labelId="label3"
            id="select3"
            value={selectedValue3}
            label="options3"
            onChange={handleChangeSelect3}
          >
            {GrpOptions3[selectedValue2] &&
              GrpOptions3[selectedValue2].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="grpqtyactions">
        <div className="qtyContainer">
          <TextField
            // size="small"
            variant="standard"
            className="textfield"
            onChange={handleChangeQtySelect}
            value={qtyValue}
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="actionsContainer">
          <AddCircleOutlineIcon
            className="addCircle"
            onClick={() => addRowHandler()}
          />

          <DeleteIcon
            className="deleteIcon"
            onClick={() => deleteRowHandler(orderRowData.id)}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderRow;
