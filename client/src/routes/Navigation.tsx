import { useCallback, useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { getUser } from "../services/auth";
import { routes } from "./routes";

export const Navigation = () => {
  const {
    auth: { isAuthenticated, loading },
  } = useContext(AuthContext);

  const { login } = useContext(AuthContext);

  const verifyUser = useCallback(async () => {
    const { user } = await getUser();
    login({
      email: user.email,
      name: user.name,
      id: user.id || "",
      password: user.password || "",
      token: localStorage.getItem("token") || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component, admin }) => (
          <Route
            key={path}
            path={admin && !isAuthenticated ? "/login" : path}
            element={<Component />}
          />
        ))}
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
