import React from "react";

const AdminBlogs = ({ blog }) => {
  return (
    <div>
      <div className=" my-5 rounded-md w-11/12 lg:w-10/12 mx-auto flex justify-start items-center gap-2 bg-gray-100 m-1">
        <div className=" w-full text-left  px-3 ">
          <figure className="">
            <img src={blog.photoURL} className=" w-40" alt="car!" />
          </figure>
        </div>

        <div className=" w-full text-left  px-3 ">
          <h2 className=" font-semibold lg:text-xl my-1">
            {blog.blogTittle?.slice(0, 22)}...
          </h2>

          <div className="my-1 text-sm flex justify-between ">
            <p>
              Posted by <span className=" font-semibold"> {blog.name} </span>
            </p>
          </div>
        </div>

        <div className=" w-full text-center px-3 ">
          <button className=" text-3xl text-green-700 hover:text-green-600">
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div className=" w-full text-center  px-3 ">
          <button className=" text-3xl text-red-700 hover:text-red-600">
            <i class="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;
