import React from "react";
import BlogCard from "../Components/BlogCard";
import SideBlog from "../Components/SideBlog";

const Home = () => {
  return (
    <div className=" px-4">
      <div className=" my-5 flex justify-start mx-2">
        <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Categories
          </button>
        </div>

        <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Latest Blog
          </button>
        </div>
        <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Popular Blog
          </button>
        </div>

        <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Create New Blog
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;
