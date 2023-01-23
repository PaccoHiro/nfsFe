import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import OrderRow from "../dropDown/OrderRow";
import "./grpOrderRows.scss";

const GrpOrderRows = ({ onUpdate }) => {
  const [checked, setChecked] = useState(true);
  const [orderRowsList, setOrderRowsList] = useState([
    { id: 1, data: "x" },
    { id: 2, data: "x" },
    { id: 3, data: "z" },
  ]); //useState("");

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setOrderRowsList([{ id: 0, data: "" }]);
      onUpdate([{ id: 0, data: "" }]); // update the form state
    } else {
      setOrderRowsList("");
      onUpdate(""); // update the form state
    }
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
    if (orderRowsList.length > 1) {
      const newOrderRowList = orderRowsList.filter(
        (orderRow) => orderRow.id !== index
      );
      setOrderRowsList(newOrderRowList);
      onUpdate(newOrderRowList); // update the form state
    }
  };
  const handleUpdate = (row) => {
    const newOrderRowList = orderRowsList.map((orderRow) =>
      orderRow.id === row.id
        ? {
            ...row,
          }
        : orderRow
    );
    setOrderRowsList(newOrderRowList);
    onUpdate(newOrderRowList); // update the form state
  };
  // console.log(orderRowsList);

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
            updateList={handleUpdate}
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
