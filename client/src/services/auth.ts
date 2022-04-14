import Api from "../Api";
import { User } from "../interfaces";

export const newUser = async (user: User) => {
  const response = await Api.post("/user", user);
  console.log(response.data);
};
