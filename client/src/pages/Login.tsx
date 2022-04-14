import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <form className="my-5 bg-gray-800 px-6 py-5 rounded-lg border border-white">
          <div className="my-5">
            <label className="text-xl">Email</label>
            <input
              className="block w-full px-3 py-2 rounded-lg text-lg"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="my-5">
            <label className="text-xl">Password</label>
            <input
              className="block w-full px-3 py-2 rounded-lg text-lg"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="my-5">
            <button
              className="w-full bg-blue-800 hover:bg-blue-900 py-2 rounded-lg text-2xl font-bold"
              type="submit"
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
