import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import OrderRow from "../dropDown/OrderRow";
import "./grpOrderRows.scss";

const GrpOrderRows = () => {
  const [checked, setChecked] = useState(true);
  const [orderRowsList, setOrderRowsList] = useState([
    { id: 1, data: "x" },
    { id: 2, data: "x" },
    { id: 3, data: "z" },
  ]); //useState("");

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    event.target.checked
      ? setOrderRowsList([{ id: 0, data: "" }])
      : setOrderRowsList("");
  };
  const addRowHandler = () => {
    // console.log("index", index);

    setOrderRowsList([
      ...orderRowsList,
      {
        id:
          orderRowsList.length > 0
            ? orderRowsList[orderRowsList.length - 1].id + 1
            : 0,
        data: "",
      },
    ]);
  };
  const deleteRowHandler = (index) => {
    // console.log("index", index);
    if (orderRowsList.length > 1)
      setOrderRowsList(
        orderRowsList.filter((orderRow) => orderRow.id !== index)
      );
  };
  //   console.log(orderRowsList);
  return (
    <fieldset className={`grpOrderRows ${checked}`}>
      <legend>
        <FormControlLabel
          label={checked ? "Order" : "Add Order"}
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
      {orderRowsList &&
        orderRowsList.map((orderRow, i) => (
          <OrderRow
            key={orderRow.id}
            orderRowData={orderRow}
            addRowHandler={addRowHandler}
            deleteRowHandler={deleteRowHandler}
          />
        ))}
    </fieldset>
  );
};
export default GrpOrderRows;
