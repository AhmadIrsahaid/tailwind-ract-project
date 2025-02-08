import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoadingIn, setUserLoadingIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);
  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoadingIn(true);
    } else {
      setCurrentUser(null);
      setUserLoadingIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoadingIn,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {children && !loading}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
