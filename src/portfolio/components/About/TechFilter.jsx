import React from "react";
import { FaDatabase } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";
import { RiPagesFill } from "react-icons/ri";
import { MdCenterFocusStrong } from "react-icons/md";

export default function TechFilter({ tag, setTag }) {
  function changeTag(value) {
    setTag(value);
  }

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      <button
        className={
          "flex gap-2 items-center" + (tag == "main" ? " text-base-cyan" : "")
        }
        onClick={() => changeTag("main")}
      >
        <MdCenterFocusStrong /> Main
      </button>
      <button
        className={
          "flex gap-2 items-center" +
          (tag == "frontend" ? " text-base-cyan" : "")
        }
        onClick={() => changeTag("frontend")}
      >
        <RiPagesFill /> Frontend
      </button>
      <button
        className={
          "flex gap-2 items-center" +
          (tag == "backend" ? " text-base-cyan" : "")
        }
        onClick={() => changeTag("backend")}
      >
        <FaGears /> Backend
      </button>
      <button
        className={
          "flex gap-2 items-center" +
          (tag == "fullstack" ? " text-base-cyan" : "")
        }
        onClick={() => changeTag("fullstack")}
      >
        <GiStack /> Fullstack
      </button>
      <button
        className={
          "flex gap-2 items-center" +
          (tag == "database" ? " text-base-cyan" : "")
        }
        onClick={() => changeTag("database")}
      >
        <FaDatabase /> Database
      </button>
    </div>
  );
}
