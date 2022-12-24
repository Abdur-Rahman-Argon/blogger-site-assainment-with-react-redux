import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link } from "react-router-dom";

const PostComment = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="">
      <div className=" my-6 flex flex-row justify-between items-center">
        <div>
          <h2>মন্তব্য করুন</h2>
        </div>
        <div>
          {user ? (
            <></>
          ) : (
            <h2>
              You are Not {"   "}
              <span className=" cursor-pointer mx-2 text-green-500">
                SignIn
              </span>
            </h2>
          )}
        </div>
      </div>
      <div className=" my-6 flex flex-row justify-between items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="input input-bordered font-semibold border-grey-300 w-10/12 lg:w-11/12 mx-5  focus:outline-0"
          />
        </div>
        <div>
          {user ? (
            <>
              <button
                type="submit"
                className="input input-bordered font-semibold border-grey-300 w-full  focus:outline-0"
              >
                Send
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="input input-bordered font-semibold border-grey-300 w-full  focus:outline-0"
              >
                Send
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostComment;
