import React from "react";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="container mx-auto px-5 bg-light-green/70 space-x-5">
      <Link to={"/admin/projects"}>Projects</Link>
      <Link to={"/admin/technologies"}>Technologies</Link>
    </div>
  );
}
