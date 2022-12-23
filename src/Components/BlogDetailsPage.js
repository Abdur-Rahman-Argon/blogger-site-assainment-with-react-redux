import React from "react";
import SideBlog from "./SideBlog";
import BlogDetails from "./BlogDetails";

const BlogDetailsPage = () => {
  return (
    <div>
      <div className=" m-2 flex flex-col lg:flex-row">
        <div className=" lg:w-10/12 ">
          <BlogDetails />
        </div>
        <div className=" p-2 lg:w-80">
          <SideBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
