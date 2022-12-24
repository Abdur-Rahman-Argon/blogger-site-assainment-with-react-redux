import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ResentBlog from "./ResentBlog";
import updateBlogsData from "../redux/thank/updateBlogsData";

const UpdateBlogs = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog._id === id)
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      blogText: blog.blogText,
      photoURL: blog.photoURL,
      blogTittle: blog.blogTittle,
    },
  });

  const navigate = useNavigate();

  const input =
    "input input-bordered font-semibold border-grey-300 w-full  focus:outline-0";

  const onSubmit = (data) => {
    // event.preventDefault()

    const updateBlog = {
      ...blog,
      blogText: data.blogText,
      photoURL: data.photoURL,
      blogTittle: data.blogTittle,
      // peraSize: [data.peraSize],
      publishDate: new Date(),
    };
    dispatch(updateBlogsData(updateBlog));
    // console.log(blog);
    navigate("/");
  };
  return (
    <div>
      <div className=" m-2 flex flex-col gap-1 lg:flex-row">
        <div className=" lg:w-6/12 mx-auto ">
          <div className="border w-full p-10 rounded">
            <h1 className=" text-center text-slate-700 font-bold text-3xl">
              {" "}
              Create A New Blogs Here
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*  */}

              {/*  */}
              <div className="my-2 flex flex-col gap-1">
                <label className=" mx-2 font-semibold" htmlFor=" ">
                  Blogs Tittle
                  <span className=" text-red-600 text-xl font-bold">*</span>
                </label>
                <input
                  placeholder="Please Input Blogs Tittle"
                  type="text"
                  className={`${input} ${
                    errors.blogTittle && " border-red-500"
                  }`}
                  {...register("blogTittle", { required: true })}
                />
                {/*  */}
                <p>
                  {errors.blogTittle && (
                    <span className=" ml-5 text-red-500">
                      Blog Tittle is required
                    </span>
                  )}
                </p>
              </div>

              {/* image URL  */}
              <div className="my-2 flex flex-col gap-1">
                <label className=" mx-2 font-semibold" htmlFor=" ">
                  Input Image URL
                  <span className=" text-red-600 text-xl font-bold">*</span>
                </label>
                <input
                  placeholder="Please Input Blogs Tittle"
                  type="text"
                  className={`${input} ${errors.photoURL && " border-red-500"}`}
                  {...register("photoURL", { required: true })}
                />
                {/*  */}
                <p>
                  {errors.photoURL && (
                    <span className=" ml-5 text-red-500">
                      Blog Tittle is required
                    </span>
                  )}
                </p>
              </div>

              {/*  */}
              <div className="my-2 flex flex-col gap-1">
                <label className=" mx-2 font-semibold" htmlFor=" ">
                  Write Your Blogs
                  <span className=" text-red-600 text-xl font-bold">*</span>
                </label>
                <textarea
                  cols="100"
                  rows="50"
                  placeholder="Please  Write here Your  Blogs"
                  type="text"
                  {...register("blogText", { required: true })}
                  className={`${input} h-32 p-2 ${
                    errors.blogText && "  border-red-500"
                  }`}
                  {...register("blogText", { required: true })}
                ></textarea>
                {/*  */}
                <p>
                  {errors.blogText && (
                    <span className=" ml-5 text-red-500">
                      Blog Field is required
                    </span>
                  )}
                </p>
              </div>

              {/* submit */}
              <input
                className=" text-xl btn btn-success font-bold my-3 w-full"
                value={"Update Blog"}
                type="submit"
              />
            </form>
          </div>
        </div>

        <div className=" p-2 lg:w-80">
          <ResentBlog />
        </div>
      </div>
    </div>
  );
};

export default UpdateBlogs;
