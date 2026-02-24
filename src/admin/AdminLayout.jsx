import { Outlet } from "react-router-dom";
import AdminNav from "./components/AdminNav";
import AdminScrollToTop from "./components/AdminScrollToTop";

export default function AdminLayout() {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      <AdminScrollToTop />
      <AdminNav />
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}
