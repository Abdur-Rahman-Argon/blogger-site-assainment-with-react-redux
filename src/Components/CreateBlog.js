import React, { useEffect } from "react";
import SideBlog from "./SideBlog";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import createBlogsData from "../redux/thank/createBlogsData";
import ResentBlog from "./ResentBlog";

const CreateBlog = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(loadBlogsData());
  // }, [dispatch]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //   if (user) {
  //     navigate("/");
  //   }

  const input =
    "input input-bordered font-semibold border-grey-300 w-full  focus:outline-0";

  const onSubmit = (data) => {
    // event.preventDefault()

    const blog = {
      name: data.name,
      email: data.email,
      blogText: data.blogText,
      photoURL: data.photoURL,
      blogTittle: data.blogTittle,
      category: data.category,
      // peraSize: [data.peraSize],
      updateDate: new Date(),
      loves: [""],
    };
    dispatch(createBlogsData(blog));
    console.log(blog);
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
              <div className="my-2 flex flex-col gap-1">
                <label className=" mx-2 font-semibold" htmlFor=" ">
                  Creator Name
                  <span className=" text-red-600 text-xl font-bold">*</span>
                  <span className=" text-red-600 text-xl font-bold">*</span>
                </label>
                <input
                  placeholder="Please Input Name"
                  type="name"
                  className={`${input} ${errors.name && " border-red-500"}`}
                  {...register("name", { required: true })}
                />
                {/*  */}
                <p>
                  {errors.name && (
                    <span className=" ml-5 text-red-500">Name is required</span>
                  )}
                </p>
              </div>

              <div className="my-2 flex flex-col gap-1">
                <label className=" font-semibold mx-2" htmlFor=" ">
                  Creator Email
                  <span className=" text-red-600 text-xl font-bold">*</span>
                </label>
                {/*  */}
                <input
                  placeholder="Please Input Email"
                  type="email"
                  className={`${input}  ${errors.email && " border-red-500"}`}
                  {...register("email", { required: true })}
                />
                <p>
                  {errors.email && (
                    <span className=" ml-5 text-red-500">
                      Email is required
                    </span>
                  )}
                </p>
              </div>

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
                <label className=" font-semibold mx-2" htmlFor=" ">
                  Category Select
                  <span className=" text-red-600 text-xl font-bold">*</span>
                </label>
                <select
                  {...register("category", { required: true })}
                  placeholder="Category"
                  className={`${input} w-6/12 ${
                    errors.category && " p-0 font-semibold border-red-500"
                  } cursor-pointer`}
                >
                  <option
                    value="none"
                    className=" bg-slate-300 py-3 text-lg font-semibold"
                  >
                    Category
                  </option>

                  <option
                    value="Education"
                    className=" cursor-pointer font-semibold"
                  >
                    Education
                  </option>
                  <option
                    value="Natural"
                    className=" cursor-pointer font-semibold"
                  >
                    Natural
                  </option>
                  <option
                    value="Travels"
                    className="  cursor-pointer font-semibold"
                  >
                    Travels
                  </option>
                  <option
                    value="Works"
                    className=" cursor-pointer font-semibold"
                  >
                    Works
                  </option>
                </select>
              </div>

              <p>
                {errors.category && (
                  <span className=" ml-5 text-red-500">
                    Category is required
                  </span>
                )}
              </p>

              {/* <div className="divider"></div> */}

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
                value={"Blog Post"}
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

export default CreateBlog;

//  {/*  */}
//  <div className="my-2">
//  <Controller
//    name="select"
//    control={control}
//    render={({ field }) => (
//      <Select
//        {...field}
//        placeholder="Select Category"
//        className={`${input} border-0 ${
//          errors.category && " border-red-500"
//        } cursor-pointer`}
//        options={[
//          { value: "Education", label: "Education" },
//          { value: "Natural", label: "Natural" },
//          { value: "Travels", label: "Travels" },
//          { value: "Works", label: "Works" },
//        ]}
//      />
//    )}
//  />
// </div>

//  {/*  */}
//  <div className="my-1 font-semibold px-6 flex flex-row justify-between items-center">
//  <div>
//    <input
//      type="radio"
//      id="one-pera"
//      name="one-pera"
//      value={"one-pera"}
//      {...register("peraSize")}
//      className=" cursor-pointer"
//      selected
//    />
//    <label className=" mx-2" htmlFor="one-pera">
//      Single Pera
//    </label>
//  </div>
//  <div>
//    <input
//      type="radio"
//      id="multi-pera"
//      name="multi-pera"
//      value={"multi-pera"}
//      {...register("peraSize")}
//      className=" cursor-pointer"
//    />
//    <label className=" mx-2" htmlFor="multi-pera">
//      Multiple Pera
//    </label>
//  </div>
// </div>
