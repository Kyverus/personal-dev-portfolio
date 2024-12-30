import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import AdminNav from "./components/AdminNav";

export default function AdminLayout() {
  return (
    <div className="min-h-dvh">
      <AdminNav />
      <div className="overflow-auto break-words p-5">
        <Outlet />
      </div>
    </div>
  );
}
