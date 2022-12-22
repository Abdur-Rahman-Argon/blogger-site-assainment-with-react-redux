import React from "react";

const ResentBlog = () => {
  return (
    <div>
      <div className="rounded-md flex gap-2 bg-gray-100 m-1">
        <figure className="">
          <img
            src="https://placeimg.com/400/225/arch"
            className=" w-40"
            alt="car!"
          />
        </figure>

        <div className=" w-full text-left  px-3 ">
          <h2 className=" font-semi text- my-1">
            This Collection Prieod Prieod
          </h2>

          <div className="my-2 text-xs flex justify-between ">
            <p>
              by <span className=" font-semibold"> Abdur Rahman </span>
            </p>
            <p className=" text- ">
              <span className=" font-semibold"> 5 May, 2022 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResentBlog;
