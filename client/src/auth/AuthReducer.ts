import { AuthState } from "../interfaces";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
}

type AuthAction =
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" }
  | { type: "REGISTER_SUCCESS"; payload: User }
  | { type: "REGISTER_FAILURE" };

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
    case "LOGOUT":
    case "REGISTER_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        id: "",
        name: "",
        email: "",
        token: "",
      };

    default:
      return state;
  }
};
