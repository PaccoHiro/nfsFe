import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="imageWrapper">
        <img
          className="image"
          src="https://via.placeholder.com/100"
          alt="Profile"
        />
      </div>
      <div className="persoData">
        <p>Name</p>
        <p>Username</p>
        <p>Date of registration</p>
        <p>Role</p>
        <p>State of account</p>
      </div>
    </div>
  );
};
export default Card;
