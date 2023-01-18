import "./dstatus.scss";

const Dstatus = ({ status }) => {
  return (
    <div className="dstatusWrapper">
      <div className={`dstatus ${status}`}>{status}</div>
    </div>
  );
};
export default Dstatus;
