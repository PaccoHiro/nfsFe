import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(localStorage.getItem('role')); // new state for user role
  const [error, setError] = useState(null);
  const isAuthenticated = Boolean(authToken);

  const login = async (username, password) => {
    try {
      // Ideally, you'd call an API here and get a token and role on success.
      const response = await fakeApiLogin(username, password); // assuming this is your API call
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role); // assuming the role is returned from API
      setAuthToken(response.token);
      setUserRole(response.role); // set user role in the state
      setError(null);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role'); // remove role from local storage on logout
    setAuthToken(null);
    setUserRole(null); // set user role to null on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Fake API Login for illustration
const fakeApiLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') resolve({ token: 'some-token', role: 'USER' }); // added role
      else reject(new Error('Invalid credentials'));
    }, 1000);
  });
};

