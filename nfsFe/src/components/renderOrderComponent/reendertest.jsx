import { Fragment } from "react";
import DiscountSelect from "../discount/Discount";
import GrpOrderRows from "../grpOrderRows/GrpOrderRows";
import ShippingModeInput from "../shippingModeInput/ShippingModeInput";
import OrderFormInput from "../orderFormInput/orderFormInput";

const renderComponent = (
  input,
  state,
  dispatch,
  handleShipSelect,
  handleSelect,
  handleGrpOrderRowsUpdate,
  handleDiscountSelectUpdate
) => {
  let renderedComponent;
  // 1-effectively decoupled the renderComponent function from the main component file, making our components cleaner and more maintainable.
  // 2-we've added an optional component property to our form data entries. During our map, we check for the presence of this property. If it exists and matches "ShippingModeInput", we render the ShippingModeInput component; otherwise, we default to rendering OrderFormInput.
  switch (input.component) {
    case "ShippingModeInput":
      renderedComponent = (
        <ShippingModeInput
          state={state}
          handleShipSelect={(e) => handleShipSelect(dispatch, e)}
          handleSelect={(e) => handleSelect(dispatch, e)}
        />
      );
      break;

    case "GrpOrderRows":
      renderedComponent = <GrpOrderRows onUpdate={handleGrpOrderRowsUpdate} />;
      break;

    case "DiscountSelect":
      renderedComponent = (
        <DiscountSelect onUpdate={handleDiscountSelectUpdate} />
      );
      break;

    default:
      renderedComponent = (
        <OrderFormInput
          label={input.label}
          inputId={input.inputId}
          inputType={input.inputType}
          onChange={(e) => handleSelect(dispatch, e)}
          name={input.name}
          value={state[input.label] ? state[input.label] : ""}
          optionsData={input.optionsData}
          showLabel={input.showLabel || true}
          required={input.required || false}
          placeholder={input.placeholder}
        />
      );
      break;
  }
  // console.log("input", input);

  // console.log("state", state);

  return input.wrapper ? (
    <div className={input.wrapper} key={input.inputId}>
      {renderedComponent}
    </div>
  ) : (
    <Fragment key={input.inputId}>{renderedComponent}</Fragment>
  );
};

export default renderComponent;
