import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import AdminNav from "./components/AdminNav";

export default function AdminLayout() {
  return (
    <div className="min-h-dvh">
      <AdminNav />
      <div className="overflow-y-auto break-words p-5 h-[calc(100vh-64px)] custom-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}
