import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  const navMenu = (
    <>
      <li>
        <Link to="/">Home </Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link to="">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge py-2 badge-xs badge-primary indicator-item">
              10
            </span>
          </div>
        </Link>
      </li>
      <li tabIndex={0} className="">
        {user ? (
          <>
            <div class="p-0">
              <img
                src="https://placeimg.com/80/80/people"
                alt=""
                className=" w-12 mx-2 rounded-full border-4 border-green-300"
              />
            </div>

            {/* profile dropdown */}
            <ul className="p-2 bg-slate-200 menu menu-compact dropdown-content mt-16 -left-2 lg:mt-0">
              <li>
                <Link to="" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="">Settings</Link>
              </li>
              <li>
                <Link to="">Logout</Link>
              </li>
            </ul>
          </>
        ) : (
          <Link to="/login"> Login </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-200 px-20 py-0">
      <div className="navbar-start">
        <Link to="" className="btn btn-ghost normal-case text-xl">
          Blogging Site
        </Link>
      </div>

      {/* Navbar End dropdown for mobile */}
      <div className="navbar-end  ">
        <div className="dropdown dropdown-end">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>

        {/* Navbar End menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 my-2 ">{navMenu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;