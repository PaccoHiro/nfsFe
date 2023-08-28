import "./orderFormInput.scss";
import SelectControl from "../select/SelectControl";
// import SelectControl from './SelectControl'; // If you're using it

const OrderFormInput = (props) => {
  let inputElement;

  switch (props.inputType) {
    case "text":
      inputElement = (
        <input
          required={props.required}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          type="text"
          className="inputvalue"
          placeholder={props.placeholder}
        />
      );
      break;
    case "select":
      inputElement = (
        <SelectControl
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          optionsData={props.optionsData}
          showLabel={props.showLabel}
        />
      );
      break;
    // Add more cases for other input types as needed.
    default:
      inputElement = null;
      break;
  }

  return (
    <div className="forminput">
      <label htmlFor={props.inputId} className="inputkey">
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

export default OrderFormInput;
