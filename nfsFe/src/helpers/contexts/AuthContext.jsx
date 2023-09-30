import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const [error, setError] = useState(null);
  const isAuthenticated = Boolean(authToken);

  const login = async (username, password) => {
    try {
      // Ideally, you'd call an API here and get a token on success.
      const response = await fakeApiLogin(username, password); // assuming this is your API call
      localStorage.setItem('token', response.token);
      setAuthToken(response.token);
      setError(null);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Fake API Login for illustration
const fakeApiLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') resolve({ token: 'some-token' });
      else reject(new Error('Invalid credentials'));
    }, 1000);
  });
};
