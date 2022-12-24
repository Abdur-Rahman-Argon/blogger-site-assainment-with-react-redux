import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const [select, setSelect] = useState(false);
  return (
    <div>
      <ul className="menu menu-horizontal -ml-2 w-36">
        <li
          onMouseOver={() => setSelect(true)}
          onMouseLeave={() => setSelect(false)}
          tabIndex={0}
          className=""
        >
          <span
            className={` ${
              select
                ? "bg-slate-700 text-white border-slate-700 rounded-t-md"
                : " text-slate-700 rounded-full  border-slate-400"
            }  py-1 w-full border-2 font-bold  uppercase`}
          >
            Categories
          </span>

          {/* profile dropdown */}
          <ul className="w-full bg-slate-700 rounded-b-md text-white font-medium menu menu-compact dropdown-content gap-2 pr-3 -mt-[2px]">
            <li>
              <Link to="" className="justify-between text-base">
                All
              </Link>
            </li>
            <li>
              <Link to="" className="justify-between text-base">
                National
              </Link>
            </li>
            <li>
              <Link to="" className="justify-between text-base">
                Works
              </Link>
            </li>
            <li>
              <Link to="" className="justify-between text-base">
                Education
              </Link>
            </li>
            <li>
              <Link to="" className="justify-between text-base">
                Travels
              </Link>
            </li>
            <li>
              <Link to="" className="justify-between text-base">
                Natural
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CategoryMenu;
