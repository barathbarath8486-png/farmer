import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [farmer, setFarmer] = useState(() => {
    const savedFarmer = localStorage.getItem("farmer");

    return savedFarmer
      ? JSON.parse(savedFarmer)
      : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("farmerToken");
  });

  const login = (farmerData, farmerToken) => {
    localStorage.setItem(
      "farmer",
      JSON.stringify(farmerData)
    );

    localStorage.setItem(
      "farmerToken",
      farmerToken
    );

    setFarmer(farmerData);
    setToken(farmerToken);
  };

  const logout = () => {
    localStorage.removeItem("farmer");
    localStorage.removeItem("farmerToken");

    setFarmer(null);
    setToken(null);
  };

  const isAuthenticated = Boolean(token);

  return (
    <AuthContext.Provider
      value={{
        farmer,
        token,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;