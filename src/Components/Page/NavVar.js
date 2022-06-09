import React from "react";
import { Link } from "react-router-dom";

const NavVar = () => {
  return (
    <div class="navbar bg-slate-900 text-white">
      <div class="navbar-start">
        <div class="dropdown ">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow   rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li tabindex="0">
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="ml-5 ">
          Mr. Riyad
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabindex="0">
            <Link to="/Projects">Projects</Link>
            <ul class="p-2"></ul>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavVar;
