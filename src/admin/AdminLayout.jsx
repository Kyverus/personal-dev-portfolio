import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import AdminNav from "./components/AdminNav";

export default function AdminLayout() {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      <AdminNav />
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}
