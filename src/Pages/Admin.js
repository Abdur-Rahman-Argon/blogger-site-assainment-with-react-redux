import React from "react";
import { useSelector } from "react-redux";
import AdminBlogs from "../Components/AdminBlogs";

const Admin = () => {
  const blogs = useSelector((state) => state.blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <AdminBlogs key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Admin;
