import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../Components/BlogCard";

const ReadingHistory = () => {
  const blogs = useSelector((state) => state.readingHistory);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-10">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
