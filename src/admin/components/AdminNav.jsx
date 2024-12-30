import React from "react";
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";

export default function AdminNav() {
  return (
    <div className="w-full bg-dark-green flex justify-between p-5 h-16">
      <Link to="/admin">
        <div className="font-bold">ADMIN DASHBOARD</div>
      </Link>
      <Logout />
    </div>
  );
}
