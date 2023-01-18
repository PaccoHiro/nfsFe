import "./singleDetail.scss";

const SingleDetail = ({ data }) => {
  // console.log(data);
  return (
    <div
      className="singleDetailWrap"
      style={{ fontSize: data.fontSize ? data.fontSize : "1em" }}
    >
      <div className="title">{data.title}</div>
      <div className="singleDetail">
        {data.values.image && (
          <div className="detailimage">
            <img src={data.values.image.src} alt="" />
          </div>
        )}
        <div className="details">
          {data.keys.map((key, i) => (
            <div
              className="detailfield"
              key={i}
              // style={{ width: data.width ? data.width : "40%" }}
            >
              <span className="fieldkey">{key}</span>
              <span className="fieldvalue">
                {console.log(data.values[key.replace(" ", "").toLowerCase()])}
                {data.values[key.replace(" ", "").toLowerCase()]}
              </span>
            </div>
          ))}

          <div className="editbutton">Edit</div>
        </div>
      </div>
    </div>
  );
};
export default SingleDetail;
