import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
