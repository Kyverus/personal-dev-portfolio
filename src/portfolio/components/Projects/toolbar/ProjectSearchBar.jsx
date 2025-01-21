import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function ProjectSearchBar({ setSearch }) {
  let timeout = null;

  function handleSearch(input) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      setSearch(input);
    }, 500);
  }

  return (
    <div className="flex grow space-x-2">
      <div className="flex items-center justify-center">
        <IoMdSearch className="size-8 text-dark-green dark:text-light-green" />
      </div>
      <input
        className="grow dark:bg-dark-tertiary dark:text-light-secondary px-2 outline-none rounded-xl"
        name="search"
        id="search"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
