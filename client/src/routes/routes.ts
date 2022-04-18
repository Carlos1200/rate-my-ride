import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomePage } from "../pages/HomePage";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: JSXComponent;
  admin: boolean;
}

export const routes: Route[] = [
  {
    path: "login",
    Component: Login,
    admin: false,
  },
  {
    path: "register",
    Component: Register,
    admin: false,
  },
  {
    path: "/",
    Component: HomePage,
    admin: true,
  },
];
