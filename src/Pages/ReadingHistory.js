import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../Components/BlogCard";
import SideBlog from "../Components/SideBlog";
import ResentBlog from "../Components/ResentBlog";
import PopularBlog from "../Components/PopularBlog";
import ReadingHistoryBlogs from "../Components/ReadingHistoryBlogs";

const ReadingHistory = () => {
  const blogs = useSelector((state) => state.readingHistory);
  const abc = [...blogs];
  const history = abc.reverse();
  return (
    <div>
      <div className=" m-2 flex flex-col lg:flex-row">
        <div className=" lg:w-10/12 ">
          <h1 className=" my-3  text-center text-slate-700 font-bold text-3xl">
            All Reading History
          </h1>
          <div className=" lg:px-10 ">
            {history?.map((blog) => (
              <ReadingHistoryBlogs key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
        <div className=" p-2 lg:w-96">
          <div className=" flex flex-col gap-4 mx-4">
            <div>
              <h1 className=" uppercase font-medium text-lg"> Popular Post</h1>
              <div>
                <PopularBlog />
              </div>
            </div>

            <div>
              <ResentBlog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingHistory;
