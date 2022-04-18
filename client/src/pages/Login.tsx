import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginForm } from "../interfaces";
import { loginSchema } from "../schemas";
import { login } from "../services/auth";
import { AuthContext } from "../auth/AuthContext";

export const Login = () => {
  const [error, setError] = useState<null | string>(null);
  const { login: loginContext, loginFail } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    login(data.email, data.password)
      .then(({ user, token }) => {
        localStorage.setItem("token", token);
        loginContext({
          id: user.id || "",
          name: user.name,
          email: user.email,
          password: data.password,
          token,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log({ err });

        setError(err.response.data.message);
        loginFail();
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };
  return (
    <div className="h-screen flex items-center">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="my-5 bg-gray-800 px-6 py-5 rounded-lg border border-white">
          <div className="my-5">
            <label className="text-xl">Email</label>
            <input
              className="block w-full px-3 py-2 rounded-lg text-lg text-black"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="my-5">
            <label className="text-xl">Password</label>
            <input
              className="block w-full px-3 py-2 rounded-lg text-lg text-black"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="my-5">
            <button
              className="w-full bg-blue-800 hover:bg-blue-900 py-2 rounded-lg text-2xl font-bold"
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </button>
          </div>
          <div className="my-5 text-center">
            <NavLink className="text-lg" to="/register">
              Register
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
