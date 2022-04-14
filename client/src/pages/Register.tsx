import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../interfaces";
import { registerSchema } from "../schemas";
import { newUser } from "../services/auth";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    newUser(data);
  };

  return (
    <div className="h-screen flex items-center">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
        <h1 className="text-3xl text-center font-bold">Resgister</h1>
        <form className="my-5 bg-gray-800 px-6 py-5 rounded-lg border border-white">
          <div className="my-5">
            <label className="text-xl">Name</label>
            <input
              className="block w-full px-3 py-2 rounded-lg text-lg text-black"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>
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
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </button>
          </div>
          <div className="my-5 text-center">
            <NavLink className="text-lg" to="/login">
              login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
