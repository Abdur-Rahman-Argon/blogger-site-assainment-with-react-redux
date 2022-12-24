import React from "react";
import { Link } from "react-router-dom";

const ReadingHistoryBlogs = ({ blog }) => {
  return (
    <div>
      <div>
        <Link
          to={`/blog-details/${blog._id}`}
          className="  font-semibold my-1 mr-5 "
        >
          <div className="rounded-md flex justify-start items-center gap-2 bg-gray-100 m-1">
            <div>
              <figure className="w-full">
                <img src={blog.photoURL} className=" w-60" alt="car!" />
              </figure>
            </div>
            <div className=" w-full  text-left  px-3 ">
              <div className=" w-full flex justify-between items-center  px-3 ">
                <div className=" text-left w-full">
                  <h2 className=" font-semibold  text-left text-xs md:text-lg   my-1">
                    {blog.blogTittle?.slice(0, 30)}...
                  </h2>
                </div>
                <div className="my-1 w-8/12 text-[10px] md:text-xs flex justify-between ">
                  <p>
                    Posted by{" "}
                    <span className=" font-semibold"> {blog.name} </span>
                  </p>
                </div>{" "}
              </div>
              <p className=" text-[10px] md:text-xs font-thin ">
                <span className="">{blog?.blogText?.slice(0, 180)} . . .</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReadingHistoryBlogs;
