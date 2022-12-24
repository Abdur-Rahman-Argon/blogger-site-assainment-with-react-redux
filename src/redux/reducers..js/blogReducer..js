import {
  ADD_CONTENT,
  ADD_LOVE,
  DELETE_CONTENT,
  GET_CONTENT,
  REMOVE_LOVE,
} from "../actionTypes/actionTypes";

const initialState = {
  test: "test",
  blogs: [],
  loveBlogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };

    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };

    case ADD_LOVE:
      return {
        ...state,
        loveBlogs: [...state.loveBlogs, action.payload],
      };

    case REMOVE_LOVE:
      return {
        ...state,
        loveBlogs: state.loveBlogs.filter(
          (blog) => blog._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default blogReducer;
