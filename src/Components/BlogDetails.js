import React from "react";
import PostComment from "./PostComment";

const BlogDetails = ({ blogDetails }) => {
  return (
    <div className="lg:px-10 px-2">
      <div className=" w-full">
        <h2 className="text-center font-bold uppercase text-4xl my-8">
          {blogDetails.blogTittle}
        </h2>

        <div className="card-actions  text-xl flex justify-between mx-5 my-4">
          <p>
            Posted By
            <span className=" cursor-pointer font-bold">
              {blogDetails.name}
            </span>
          </p>
          <p className=" text-lg">
            <span className="font-semibold">Date:</span>
            <span className=" font-semibold"> {blogDetails.publishDate} </span>
          </p>
        </div>

        <div className="divider"></div>
      </div>
      <div className=" text-center">
        <div className=" text-center">
          <img src={blogDetails.photoURL} alt="car!" className=" mx-auto" />
        </div>
        <div className=" text-center"> Image tittle</div>
        <div className="divider"></div>
      </div>
      <div className=" text-left  gap-2 ">
        <p>{blogDetails.blogText}</p>
      </div>

      <div className=" divider"></div>

      <div>
        <PostComment />
      </div>

      <div className=" divider"></div>
      <div className="">
        <div className=" my-6 flex flex-row justify-between items-center">
          <div>
            <h2 className=" underline">{27} Comments</h2>
          </div>
          <div className=" flex flex-row items-center">
            <h2 className=" underline mx-4">
              <span>Filter</span>
            </h2>
            <select className="border focus:border-gray-300">
              <option value="Oldest" key="Oldest">
                Oldest
              </option>
              <option value="Newest" key="Newest">
                Newest
              </option>
            </select>
          </div>
        </div>
        <div>
          <div className=" flex flex-row items-center">
            <div className="avatar mx-5">
              <div className="w-16 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div>
              <div className="card-actions  text-base  flex justify-between my-1">
                <p>
                  <span className=" cursor-pointer font-semibold">
                    Abdur Rahman
                  </span>
                </p>
                <p className=" text-base">
                  <span className="font-semibold">Date:</span>
                  <span className=" font-semibold"> 5 May, 2022 </span>
                </p>
              </div>
              <p className=" text-sm mr-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                dignissimos doloremque illo, sapiente, quisquam ipsa suscipit,
                quas iste vitae quod pariatur nihil ut expedita laboriosam{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
