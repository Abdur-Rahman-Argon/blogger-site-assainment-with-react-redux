import React from "react";
import { useSelector } from "react-redux";
import ResentViews from "./ResentViews";

const ResentBlog = ({ blog }) => {
  const blogs = useSelector((state) => state.blogs);
  const abc = [...blogs];
  const history = abc.reverse();
  console.log(history);
  return (
    <div>
      <div>
        <h1 className=" uppercase font-medium text-lg"> Resent Blogs</h1>
        <div className="flex flex-col gap-1">
          {history?.splice(0, 5).map((blog) => (
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

export default ResentBlog;
