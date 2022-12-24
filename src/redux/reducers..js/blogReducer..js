import {
  ADD_CONTENT,
  ADD_LOVE,
  DELETE_CONTENT,
  GET_CONTENT,
  READING_HISTORY,
  REMOVE_LOVE,
} from "../actionTypes/actionTypes";

const initialState = {
  test: "test",
  blogs: [],
  loveBlogs: [],
  readingHistory: [],
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

    case READING_HISTORY:
      const exist = state.readingHistory.find(
        (b) => b._id === action.payload._id
      );
      if (exist) {
        const previousState = state.readingHistory.filter(
          (b) => b._id !== action.payload._id
        );
        return {
          ...state,
          readingHistory: [...previousState, action.payload],
        };
      } else {
        return {
          ...state,
          readingHistory: [...state.readingHistory, action.payload],
        };
      }

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
