import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, CUser, cLoading, cError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const input =
    "input input-bordered input-accent w-full max-w-xs focus:outline-0";

  const onSubmit = async (data) => {
    // event.preventDefault()
    await createUserWithEmailAndPassword(data.email, data.password);

    const success = await updateProfile({
      displayName: data.displayName,
      photoURL: data.photoURL,
    });
    console.log(success);
    if (success) {
      alert("Updated profile");
    }
  };

  return (
    <div className="mx-auto my-10 w-96 border-2 shadow-2xl p-10 rounded-lg">
      <div className=" ">
        <div className="mb-8">
          <h1 className=" text-center font-semibold text-green-600 text-3xl">
            Please Login
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            {/*  */}
            <input
              placeholder="Please Input Name"
              type="text"
              className={`${input}  ${errors.displayName && " border-red-500"}`}
              {...register("displayName", { required: true })}
            />
            <p>
              {errors.displayName && (
                <span className=" ml-5 text-red-500">Name is required</span>
              )}
            </p>
          </div>

          <div className="my-2">
            {/*  */}
            <input
              placeholder="Please Input Email"
              type="email"
              className={`${input}  ${errors.email && " border-red-500"}`}
              {...register("email", { required: true })}
            />
            <p>
              {" "}
              {errors.email && (
                <span className=" ml-5 text-red-500">Email is required</span>
              )}
            </p>
          </div>

          {/*  */}
          <div className="my-2">
            <input
              placeholder="Please Input password"
              type="password"
              className={`${input} ${errors.password && " border-red-500"}`}
              {...register("password", { required: true })}
            />
            {/*  */}
            <p>
              {" "}
              {errors.password && (
                <span className=" ml-5 text-red-500">Password is required</span>
              )}
            </p>
          </div>

          <input
            className=" text-xl btn btn-primary my-3 w-full"
            value={"SignUp"}
            type="submit"
          />
        </form>
      </div>

      <p className=" text-center  font-semibold">
        Have A Account{" "}
        <Link to="/login" className="text-green-700">
          Login
        </Link>
      </p>

      <div className="divider">OR</div>

      <div className=" grid grid-cols-3 justify-around text-center mt-5 text-3xl ">
        <div className=" text-center">
          <button onClick={() => signInWithGoogle()}>
            <i class="fa-brands fa-google-plus-g text-center text-red-600"></i>
          </button>
        </div>
        <div className=" text-center">
          <i class="fa-brands fa-facebook text-center text-blue-500"></i>
        </div>
        <div className=" text-center">
          <i class="fa-brands fa-github text-center"></i>
        </div>
        <div>{/* <i class="fa-brands fa-linkedin-in"></i> */}</div>
      </div>
    </div>
  );
};

export default Signup;
