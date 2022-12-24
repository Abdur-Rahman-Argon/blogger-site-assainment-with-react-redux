import { createBlogs } from "../actions/blogsActions";

const createBlogsData = (blog) => {
  console.log(blog);
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/create-blog", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    });
    const data = await res.json();

    if (data.acknowledge) {
      dispatch(createBlogs({ _id: data.insertedId, ...blog }));
    }
  };
};

export default createBlogsData;
