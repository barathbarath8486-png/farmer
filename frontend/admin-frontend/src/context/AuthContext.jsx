import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    const savedAdmin = localStorage.getItem("admin");
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("adminToken");
  });

  const login = (adminData, jwtToken) => {
    setAdmin(adminData);
    setToken(jwtToken);

    localStorage.setItem("admin", JSON.stringify(adminData));
    localStorage.setItem("adminToken", jwtToken);
  };

  const logout = () => {
    setAdmin(null);
    setToken(null);

    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        admin,
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