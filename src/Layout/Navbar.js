import React from "react";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <a>Home </a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>
          <button className="btn btn-ghost btn-circle">
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
          </button>
        </a>
      </li>
      <li>
        <a>
          <button className="btn btn-ghost btn-circle">
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
          </button>
        </a>
      </li>
      <li tabIndex={0} className="">
        <div class="w-20 ">
          <img
            src="https://placeimg.com/80/80/people"
            alt=""
            className="rounded-full"
          />
        </div>
        <ul className="p-2 bg-slate-200 menu menu-compact dropdown-content mt-16 -left-2 lg:mt-0">
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-200 px-20">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Blogging Site</a>
      </div>

      {/* Navbar End */}
      <div className="navbar-end  ">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
