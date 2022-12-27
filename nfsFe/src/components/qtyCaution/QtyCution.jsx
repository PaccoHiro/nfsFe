import "./qtyCaution.scss";

const QtyCaution = ({ qty }) => {
  return (
    <div className="qtyWrapper">
      <div
        className={`qtyCaution ${
          qty > 10 ? "dispo" : qty > 4 ? "low" : "verylow"
        }`}
      >
        {qty}
      </div>
    </div>
  );
};
export default QtyCaution;
