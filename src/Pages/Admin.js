import React from "react";
import { useSelector } from "react-redux";
import AdminBlogs from "../Components/AdminBlogs";

const Admin = () => {
  const blogs = useSelector((state) => state.blogs);
  return (
    <div>
      <h1 className=" my-5  text-center text-slate-700 font-bold text-3xl">
        Admin Manage All Post
      </h1>
      {blogs.map((blog) => (
        <AdminBlogs key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Admin;
