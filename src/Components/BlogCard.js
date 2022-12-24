import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const [love, setLove] = useState(false);
  return (
    <div className="  w-72 m-1">
      <div className="rounded-lg  w-72 m-1">
        <figure className="">
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>

        <div className=" bg-gray-200 p-4">
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
                <i class="fa-light fa-watch"></i>
              </span>{" "}
              <span className=" font-semibold text-sm"> 5 May, 2022 </span>
            </p>
          </div>

          <p className=" font-normal text-sm">
            In this collection of blog templates, we tried to collect a broad
            range of different. Let’s kick tings of with the more unusual tool,
            Suppa blog. If you are looking for that’s not too classic and
            traditional.
          </p>

          <div className="card-actions items-center justify-between mt-2">
            <button
              onClick={() => setLove(!love)}
              className="  mt-1 text-2xl font-semibold bg-gray-300 rounded px-1 "
            >
              <i
                class={`fa-solid fa-heart ${
                  love ? "text-red-500" : " text-slate-500"
                } `}
              ></i>
            </button>{" "}
            <Link to="/blog-details" className="  font-semibold my-1 mr-5 ">
              Read More &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
