const initialState = {
  test: "test",
};

const blogReducer = (state = initialState, action) => {
  switch ("key") {
    case "value":
      return { ...state };

    default:
      return state;
  }
};

export default blogReducer;
