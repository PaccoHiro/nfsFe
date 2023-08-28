import { useNavigate } from "react-router-dom";
import "./new.scss";
import { useState } from "react";

const New = ({ formData, formDataValues }) => {
  // Construct FormDataLayout based on formDataValues
  const FormDataLayout = formDataValues
    ? formData
        .filter((item) => Object.keys(formDataValues).includes(item.label))
        .map((item) => ({
          ...item,
          value: formDataValues[item.label],
        }))
    : formData;
  // console.log(FormDataLayout);
  const navigate = useNavigate();
  // const formDataLabelsAndValues = formData.reduce((result, item) => {
  //   result[item.label] = item.value || "";
  //   return result;
  // }, {}); // extract object {labelName:Value,.......}
  // const [inputValues, setInputValues] = useState(formDataLabelsAndValues); // State to hold input values
  const [inputValues, setInputValues] = useState(
    formDataValues ? formDataValues : {}
  ); // State to hold input values

  const handleInputChange = (e, inputKey) => {
    const updatedValues = { ...inputValues, [inputKey]: e.target.value };
    setInputValues(updatedValues);
  };
  return (
    <div className="new">
      <div className="title">Add New : </div>
      <form>
        <div className="formwrapper">
          {FormDataLayout.map((dataInput) => (
            <div className="forminput" key={dataInput.label}>
              <label htmlFor="" className="inputkey">
                {dataInput.label}
              </label>
              <input
                type={dataInput.type}
                className="inputvalue"
                value={inputValues[dataInput.label] || ""}
                onChange={(e) => handleInputChange(e, dataInput.label)}
                placeholder={dataInput.placeHolder}
              />
            </div>
          ))}
        </div>
        <div className="grpbuttonswrapper">
          <div className="grpbuttons">
            <button
              className="submitbutton"
              onClick={(e) => e.preventDefault()}
            >
              Submit
            </button>
            <button
              className="cancelbutton"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default New;
