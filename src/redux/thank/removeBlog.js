const removeBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/create-blog/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.acknowledge) {
      dispatch(removeBlogAction(id));
    }
  };
};
