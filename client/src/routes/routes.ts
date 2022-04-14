import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: JSXComponent;
}

export const routes: Route[] = [
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
];
