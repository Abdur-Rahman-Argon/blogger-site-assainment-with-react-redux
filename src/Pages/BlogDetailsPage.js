import React from "react";
import SideBlog from "../Components/SideBlog";
import BlogDetails from "../Components/BlogDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blogDetails = useSelector((state) =>
    state.blogs.filter((blog) => blog._id === id)
  );
  console.log(blogDetails);

  return (
    <div>
      <div className=" m-2 flex flex-col lg:flex-row">
        <div className=" lg:w-10/12 ">
          <BlogDetails blogDetails={blogDetails[0]} />
        </div>
        <div className=" p-2 lg:w-80">
          <SideBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
