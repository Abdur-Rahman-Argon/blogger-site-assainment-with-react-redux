import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addLovesBlogs,
  addReadingHistory,
  removeLovesBlogs,
} from "../redux/actions/blogsActions";

const BlogCard = ({ blog }) => {
  const myLove = useSelector((state) =>
    state.loveBlogs.filter((bl) => bl._id === blog._id)
  );

  const love = myLove.length;

  const dispatch = useDispatch();

  return (
    <div className="  w-72 m-1">
      <div className="rounded-lg  w-72 m-1">
        <figure className="">
          <img src={blog.photoURL} alt="car!" />
        </figure>

        <div className=" bg-gray-200 p-2">
          <h2 className="text-center font-semibold text-lg my-1">
            {blog?.blogTittle?.slice(0, 22)}
          </h2>

          <div className="card-actions my-1 flex justify-between">
            <p>
              By <span className=" font-semibold"> {blog.name}</span>
            </p>
            <p>
              <span>
                <i className="fa-light fa-watch"></i>
              </span>
              <span className=" font-semibold text-sm">
                {" "}
                {blog.publishDate}{" "}
              </span>
            </p>
          </div>

          <p className=" font-normal text-sm">
            {blog?.blogText?.slice(0, 150)} . . .
          </p>

          <div className="card-actions items-center justify-between mt-2">
            {love ? (
              <button
                onClick={() => dispatch(removeLovesBlogs(blog._id))}
                className="  mt-1 text-2xl font-semibold bg-gray-300 rounded px-1 "
              >
                <i
                  className={`fa-solid fa-heart text-red-500
                 `}
                ></i>
              </button>
            ) : (
              <button
                onClick={() => dispatch(addLovesBlogs(blog))}
                className="  mt-1 text-2xl font-semibold bg-gray-300 rounded px-1 "
              >
                <i
                  className={`fa-solid fa-heart  text-slate-500"
                } `}
                ></i>
              </button>
            )}

            <button onClick={() => dispatch(addReadingHistory(blog))}>
              <Link
                to={`/blog-details/${blog._id}`}
                className="  font-semibold my-1 mr-5 "
              >
                Read More &#8594;
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// const click = (blog) => {
//   dispatch(addReadingHistory(blog));
//   navigate(`/blog-details/:id`);
// };
