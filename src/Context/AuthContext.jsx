import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create Auth Context
export const AuthContext = createContext();

// Provide Auth Context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function (Updates both state and localStorage)
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData); // ✅ Fix: Update state when logging in
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Fix: Move PropTypes outside of the function
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
