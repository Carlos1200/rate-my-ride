import React, { useReducer } from "react";
import { AuthState } from "../interfaces";
import { AuthReducer, User } from "./AuthReducer";

type ComponentElement = JSX.Element;

interface AuthContextProps {
  auth: AuthState;
  login: (user: User) => void;
  logout: () => void;
  register: (user: User) => void;
  loginFail: () => void;
  registerFail: () => void;
}

export const AuthContext = React.createContext({} as AuthContextProps);

const initialState: AuthState = {
  isAuthenticated: false,
  loading: true,
  email: "",
  token: "",
  name: "",
  id: "",
};

export const AuthProvider = ({
  children,
}: {
  children: ComponentElement | ComponentElement[];
}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (user: User) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user,
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const register = (user: User) => {
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: user,
    });
  };

  const loginFail = () => {
    dispatch({
      type: "LOGIN_FAILURE",
    });
  };

  const registerFail = () => {
    dispatch({
      type: "REGISTER_FAILURE",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth: state,
        login,
        logout,
        register,
        loginFail,
        registerFail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
