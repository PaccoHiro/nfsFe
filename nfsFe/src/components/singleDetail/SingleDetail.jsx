import { useNavigate } from "react-router-dom";
import "./singleDetail.scss";
import { useState } from "react";
import Modal from "../modal/Modal";

const SingleDetail = ({ data }) => {
  const dataKeys = Object.keys(data.values);
  // extract data to use in modal
  const modifiableData = {};
  data.modifiables.forEach((key) => {
    modifiableData[key] = data.values[key.toLowerCase()];
  }); //expected : {a: 'x', b: 'y', c: 'z'}
  // const modifiableData = data.modifiables.map((key) => ({
  //   [key]: data.modifiables[key],
  // }));//[{},{},{}....]
  console.log(modifiableData);

  const [modal, setModal] = useState(false); // modal state
  const navigate = useNavigate();

  let widthGrid = data.slug == "itemDetails" ? 27 : 31.75;
  //console.log(widthGrid);
  // console.log(modal);
  return (
    <div
      className="singleDetailWrap"
      style={{ fontSize: data.fontSize ? data.fontSize : "1em" }}
    >
      <div className="title">{data.title}</div>
      <div className="singleDetail">
        {/* {data.values.image && ( */}
        {dataKeys.includes("image") && (
          <div className="detailimage">
            <img src={data.values.image.src} alt="" />
          </div>
        )}
        <div
          className="details"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${widthGrid}em, 100%), 1fr))`,
          }}
        >
          {/* {data.keys.map((key, i) => ( */}
          {dataKeys
            .filter((item) => item !== "image")
            .map((key, i) => (
              <div
                className="detailfield"
                key={i}
                // style={{ width: data.width ? data.width : "40%" }}
              >
                <span className="fieldkey">{key}</span>
                <span className="fieldvalue">
                  {/* {console.log(data.values[key.replace(" ", "").toLowerCase()])} */}
                  {data.values[key.replace(" ", "").toLowerCase()]}
                </span>
              </div>
            ))}
          <div className="grpbtn">
            <div className="editbutton" onClick={() => setModal(true)}>
              Edit
            </div>
            <div
              className="backbutton"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Back
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          onClose={setModal}
          slug={data.slug}
          modalFormData={modifiableData}
        />
      )}
    </div>
  );
};
export default SingleDetail;
