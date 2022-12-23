import React from "react";

const PostComment = () => {
  return (
    <div className="">
      <div className=" my-6 flex flex-row justify-between items-center">
        <div>
          <h2>মন্তব্য করুন</h2>
        </div>
        <div>
          <h2>
            You are Not {"   "}
            <span className=" cursor-pointer mx-2 text-green-500">SignIn</span>
          </h2>
        </div>
      </div>
      <div className=" my-6 flex flex-row justify-between items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="input input-bordered font-semibold border-grey-300 w-10/12 lg:w-11/12 mx-5  focus:outline-0"
          />
        </div>
        <div>
          <button
            type="text"
            className="input input-bordered font-semibold border-grey-300 w-full  focus:outline-0"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
