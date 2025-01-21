import React from "react";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";

export default function AdminNav() {
  return (
    <div className="w-full bg-dark-green flex justify-between p-5 h-16">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <CgWebsite />
        </Link>
        <Link to="/admin">
          <div className="font-bold">ADMIN DASHBOARD</div>
        </Link>
      </div>

      <Logout />
    </div>
  );
}
