import "./new.scss";

const New = () => {
  return (
    <div className="new">
      <div className="title">Add New : </div>
      <form>
        <div className="formwrapper">
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
          <div className="forminput">
            <label htmlFor="" className="inputkey">
              Item
            </label>
            <input type="text" className="inputvalue" placeholder=" input" />
          </div>
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
