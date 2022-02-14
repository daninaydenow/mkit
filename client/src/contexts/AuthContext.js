import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { authUrl } from "../endPoints/authApi";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useLocalStorage("user", null);

  const register = async (data) => {
    return fetch(`${authUrl}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.message) {
          throw new Error(user);
        }
        setCurrentUser(user);
        return user;
      })
      .catch((err) => {
        return err;
      });
  };

  const login = async (data) => {
    return fetch(`${authUrl}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.message) {
          throw new Error(user);
        }
        setCurrentUser(user);
        return user;
      })
      .catch((err) => {
        return err;
      });
  };

  const logout = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    logout,
    login,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
