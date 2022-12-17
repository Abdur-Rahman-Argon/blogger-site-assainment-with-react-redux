import React, { useState } from "react";

const BlogCard = () => {
  const [love, setLove] = useState(false);
  return (
    <div className="rounded-md relative  w-72 glass m-1">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="car!" />
      </figure>
      <div className=" bg-gray-100 p-2">
        <h2 className="text-center font-semibold text-lg my-1">
          This Collection Prieod
        </h2>

        <div className="card-actions my-1 flex justify-between">
          <p>
            {" "}
            by <span className=" font-semibold"> Abdur Rahman </span>
          </p>
          <p>
            {" "}
            <span>
              <i class="fa-duotone fa-watch-smart"></i>
            </span>{" "}
            <span className=" font-semibold text-sm"> 5 May, 2022 </span>
          </p>
        </div>

        <p className=" font-normal text-sm">
          In this collection of blog templates, we tried to collect a broad
          range of different. Let’s kick tings of with the more unusual tool,
          Suppablog. If you are looking for that’s not too classic and
          traditional.
        </p>

        <div className="card-actions justify-start">
          <button className="  font-semibold my-1 ">Read More &#8594;</button>
        </div>
      </div>
      <div className=" absolute top-4 right-4">
        <button
          onClick={() => setLove(!love)}
          className=" text-2xl font-semibold text-red-400"
        >
          {love ? (
            <i class="fa-solid fa-heart"></i>
          ) : (
            <i class="fa-regular fa-heart"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
