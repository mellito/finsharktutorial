import { createContext, useContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router";
import { loginApi, registerApi, ValidateToken } from "../Services/AuthServices";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, userName: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      ValidateToken(token).then((res) => {
        return !res && logout();
      });

      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    userName: string,
    password: string
  ) => {
    await registerApi(email, userName, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          const userObject: UserProfile = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObject));
          setToken(res?.data.token);
          setUser(userObject);
          toast.success("Login Success");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occurred " + e));
  };

  const loginUser = async (email: string, password: string) => {
    await loginApi(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          const userObject: UserProfile = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObject));
          setToken(res?.data.token);
          setUser(userObject);
          toast.success("Login Success");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occurred " + e));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady && children}
    </UserContext.Provider>
  );
};

export const UseAuth = () => useContext(UserContext);
