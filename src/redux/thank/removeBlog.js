import { removeBlogAction } from "../actions/blogsActions";

const removeBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://blogging-server.onrender.com/delete-blog/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    if (data.acknowledge) {
      dispatch(removeBlogAction(id));
    }
  };
};

export default removeBlog;
