import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate hook
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate(); // initialize useNavigate hook

  const goBack = () => {
    navigate(-1); // go back to the previous page
  };

  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={goBack} className="go-back-button">Go Back</button> {/* add go back button */}
    </div>
  );
};

export default NotFound;
