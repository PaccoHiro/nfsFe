import "./new.scss";

const New = ({ formData }) => {
  return (
    <div className="new">
      <div className="title">Add New : </div>
      <form>
        <div className="formwrapper">
          {formData.map((dataInput) => (
            <div className="forminput">
              <label htmlFor="" className="inputkey">
                {dataInput.label}
              </label>
              <input
                type={dataInput.type}
                className="inputvalue"
                placeholder={dataInput.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="grpbuttons">
          <button className="submitbutton" onClick={(e) => e.preventDefault()}>
            Submit
          </button>
          <button className="cancelbutton" onClick={(e) => e.preventDefault()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default New;
