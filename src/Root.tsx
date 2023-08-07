import { FC } from "react";
import { Nav } from "./components/Nav";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

export const Root: FC = () => (
  <div>
    <AuthProvider>
      <Nav />
      <Outlet />
    </AuthProvider>
  </div>
);
