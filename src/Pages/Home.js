import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import CategoryMenu from "../Components/CategoryMenu";
import { useDispatch, useSelector } from "react-redux";
import loadBlogsData from "../redux/thank/loadBlogsData";
import { latestBlogs, oldestBlogs } from "../redux/actions/blogsActions";

const Home = () => {
  const [blog, setBlog] = useState(false);
  // const [popularBlog, setPopularBlog] = useState(false);
  // const [resentBlog, setResentBlog] = useState(false);
  const active = "bg-slate-700 text-white";
  const unSelect = " text-slate-700  border-slate-400";
  const state = useSelector((state) => state);
  const blogs = state.blogs;
  const latest = state.latest;
  const oldest = state.oldest;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlogsData());
  }, [dispatch]);

  const toggleLatestBlogs = () => {
    const late = blogs.reverse();
    if (oldest) {
      dispatch(latestBlogs(late));
    } else {
      dispatch(latestBlogs(blogs));
    }
  };

  const toggleOldestBlogs = () => {
    const old = blogs.reverse();
    if (latest) {
      dispatch(oldestBlogs(old));
    } else {
      dispatch(oldestBlogs(blogs));
    }
  };

  return (
    <div className=" px-4">
      <div className=" my-5 flex justify-start mx-2 gap-2">
        <div>
          <CategoryMenu />
        </div>

        <div>
          <button
            onClick={toggleLatestBlogs}
            className={` ${
              latest ? active : unSelect
            }  py-1 px-2 border-2 font-bold rounded-full uppercase`}
          >
            Latest Blog
          </button>
        </div>

        <div>
          <button
            onClick={toggleOldestBlogs}
            className={` ${
              oldest ? active : unSelect
            }  py-1 px-2 border-2 font-bold rounded-full uppercase`}
          >
            Oldest Blog
          </button>
        </div>

        {/* <div>
          <button
            onClick={() => setSelect(!select)}
            className={` ${
              select ? selectt : unSelect
            }  py-1 px-2 border-2 font-bold rounded-full uppercase`}
          >
            Popular Blog
          </button>
        </div> */}

        {/* <div>
          <button className=" bg-slate-700 text-white py-1 px-2 border-2 rounded-full uppercase">
            Create New Blog
          </button>
        </div> */}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center md:justify-around lg:grid-cols-4">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
