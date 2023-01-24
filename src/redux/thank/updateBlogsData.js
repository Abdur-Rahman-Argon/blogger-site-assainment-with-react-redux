import { updateBlogs } from "../actions/blogsActions";

const updateBlogsData = (blog) => {
  console.log(blog);
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://blogging-server.onrender.com/update-blog/${blog._id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(blog),
      }
    );
    const data = await res.json();

    if (data.acknowledge) {
      dispatch(updateBlogs(blog));
    }
  };
};

export default updateBlogsData;
