import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Main = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
