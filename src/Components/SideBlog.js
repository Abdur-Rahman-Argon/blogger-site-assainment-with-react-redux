import React from "react";
import PopularBlog from "./PopularBlog";
import { useSelector } from "react-redux";
import ResentViews from "./ResentViews";

const SideBlog = () => {
  const blogs = useSelector((state) => state.readingHistory);
  const abc = [...blogs];
  const history = abc.reverse();

  return (
    <div className=" flex flex-col gap-4 mx-4">
      <div>
        <h1 className=" uppercase font-medium text-lg"> Popular Post</h1>
        <div>
          <PopularBlog />
        </div>
      </div>

      <div>
        <h1 className=" uppercase font-medium text-lg"> Resent Views</h1>
        <div className="flex flex-col gap-1">
          {history?.map((blog) => (
            <ResentViews key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      <div className="">
        <h1 className=" uppercase font-medium text-lg">Categories</h1>
        <div className=" flex flex-col gap-2">
          <div className="rounded-md flex justify-between px-4 py-1 gap-2 bg-gray-100 w-full  glass m-1">
            <span> All</span> <span> 50</span>
          </div>
          <div className="rounded-md flex justify-between px-4 py-1 gap-2 bg-gray-100 w-full  glass m-1">
            <span> Pages</span> <span> 30</span>
          </div>
          <div className="rounded-md flex justify-between px-4 py-1 gap-2 bg-gray-100 w-full  glass m-1">
            <span> Education</span> <span> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBlog;
