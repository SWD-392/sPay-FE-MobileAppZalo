import axios from "axios";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: String, user: String) => void;
  logout: () => void;
  user: string | null;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
      setUser(user);
      navigate("/");
    }
  }, []);

  const login = (token: string, user: string) => {
    setIsAuthenticated(true);
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
  };

  // axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (error.response.status === 401) {
  //       // If the token is expired, log out the user
  //       logout();
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  const logout = () => {
    localStorage.removeItem("token");

    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
