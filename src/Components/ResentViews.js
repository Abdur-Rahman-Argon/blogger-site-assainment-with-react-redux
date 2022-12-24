import React from "react";
import { Link } from "react-router-dom";

const ResentViews = ({ blog }) => {
  return (
    <div>
      <Link
        to={`/blog-details/${blog._id}`}
        className="  font-semibold my-1 mr-5 "
      >
        <div className="rounded-md flex justify-start items-center gap-2 bg-gray-100 m-1">
          <figure className="">
            <img src={blog.photoURL} className=" w-40" alt="car!" />
          </figure>

          <div className=" w-full text-left  px-3 ">
            <h2 className=" font-semi text- my-1">
              {blog.blogTittle?.slice(0, 17)}...
            </h2>

            <div className="my-1 text-xs flex justify-between ">
              <p>
                by <span className=" font-semibold"> {blog.name} </span>
              </p>
              {/* <p className=" text- ">
              <span className=" font-semibold">{blog.publishDate}</span>
            </p> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResentViews;
