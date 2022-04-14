export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  password?: string;
}
