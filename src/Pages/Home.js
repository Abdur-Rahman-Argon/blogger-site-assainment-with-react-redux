import React, { useState } from "react";
import BlogCard from "../Components/BlogCard";
import CategoryMenu from "../Components/CategoryMenu";

const Home = () => {
  const [select, setSelect] = useState(false);
  const selectt = "bg-slate-700 text-white";
  const unSelect = " text-slate-700  border-slate-400";

  return (
    <div className=" px-4">
      <div className=" my-5 flex justify-start mx-2 gap-2">
        <div>
          <CategoryMenu />
        </div>

        <div>
          <button
            onClick={() => setSelect(!select)}
            className={` ${
              select ? selectt : unSelect
            }  py-1 px-2 border-2 font-bold rounded-full uppercase`}
          >
            Latest Blog
          </button>
        </div>
        <div>
          <button
            onClick={() => setSelect(!select)}
            className={` ${
              select ? selectt : unSelect
            }  py-1 px-2 border-2 font-bold rounded-full uppercase`}
          >
            Popular Blog
          </button>
        </div>

        {/* <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Create New Blog
          </button>
        </div> */}
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
