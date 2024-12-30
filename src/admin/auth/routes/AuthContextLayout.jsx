import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../../../_contexts/AuthContextProvider";

const AuthContextLayout = () => {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
};

export default AuthContextLayout;
