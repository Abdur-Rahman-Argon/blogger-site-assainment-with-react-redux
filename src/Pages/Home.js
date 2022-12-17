import React from "react";
import BlogCard from "../Components/BlogCard";

const Home = () => {
  return (
    <div>
      <div className=" my-2 flex justify-start mx-2">
        <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Category
          </button>
        </div>

        <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Latest Blog
          </button>
        </div>

        <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Category
          </button>
        </div>
      </div>
      <div>
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;
