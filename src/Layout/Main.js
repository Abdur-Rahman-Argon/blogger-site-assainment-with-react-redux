import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import loadBlogsData from "../redux/thank/loadBlogsData";
const Main = () => {
  const state = useSelector((state) => state);
  // console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogsData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
