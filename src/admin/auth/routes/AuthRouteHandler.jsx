import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useAuthContext } from "../../../_contexts/AuthContextProvider";
import Loading from "../../components/Loading";

const AuthRouteHandler = () => {
  const { auth, authResolved } = useAuthContext();
  const location = useLocation();
  const pathname = location.pathname;

  if (!authResolved) {
    console.log("Resolving Auth");
    return <Loading />;
  } else {
    if (auth) {
      if (pathname == "/login") {
        return <Navigate to="/admin" />;
      }
      return <Outlet />;
    } else {
      if (pathname == "/login") {
        return <Outlet />;
      } else {
        return <Navigate to="/login" />;
      }
    }
  }
};

export default AuthRouteHandler;
