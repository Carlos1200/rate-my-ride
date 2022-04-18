import Api from "../Api";
import { User, UserResponse } from "../interfaces";

export const newUser = (user: User): Promise<UserResponse> =>
  Api.post("/user", user);

export const login = (email: string, password: string): Promise<UserResponse> =>
  Api.post("/user/login", { email, password }).then((res) => res.data);

export const getUser = (): Promise<UserResponse> =>
  Api.get("/user").then((res) => res.data);
