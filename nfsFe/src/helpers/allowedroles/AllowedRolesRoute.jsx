// AllowedRolesRoute.js

import { Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const AllowedRolesComponent = ({ children, allowedRoles }) => {
const { userRole } = useAuth();

  if (!userRole) {
    // User is not logged in
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    // User's role is not in the list of allowed roles
    return <Navigate to="/" />; // Redirect to a suitable page, maybe a 403 Forbidden page
  }

  return children;
};

export default AllowedRolesComponent;
