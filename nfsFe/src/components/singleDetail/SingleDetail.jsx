import "./singleDetail.scss";

const SingleDetail = ({ data }) => {
  console.log(data);
  return (
    <div className="singleDetailWrap">
      <div className="title">{data.title}</div>
      <div className="singleDetail">
        {data.values.image && (
          <div className="detailimage">
            <img src={data.values.image.src} alt="" />
          </div>
        )}
        <div className="details">
          {data.keys.map((key, i) => (
            <div className="detailfield" key={i}>
              <span className="fieldkey">{key}</span>
              <span className="fieldvalue">
                {data.values[key.toLowerCase()]}
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
