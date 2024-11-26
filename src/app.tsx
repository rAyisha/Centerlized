import { lazy, Suspense, useEffect } from "preact/compat";
import "./app.css";
import { AppDispatch } from "./redux/store";
import { useDispatch } from "react-redux";
import { logOut } from "./module/auth/loginModule/store/authModuleReducers";
const LazyMainRoute = lazy(() => import('./routes/MainRoute'));
export function App() {


  return (
    <Suspense fallback={<div className="flex justify-content-center align-items-center h-screen">Loading...</div>}>
      <LazyMainRoute />
    </Suspense>
  );
}
