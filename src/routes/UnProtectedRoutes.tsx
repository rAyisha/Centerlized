import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function UnprotectedRoutes(): JSX.Element {
  let auth: string | null = Cookies.get("token");

  return auth === null ? <Outlet /> : <Navigate to="/login" />;
}
