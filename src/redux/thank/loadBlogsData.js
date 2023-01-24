import { loadBlogs } from "../actions/blogsActions";

const loadBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://blogging-server.onrender.com/all-blogs");
    const data = await res.json();
    console.log(data);

    if (data) {
      dispatch(loadBlogs(data));
    }
  };
};

export default loadBlogsData;
