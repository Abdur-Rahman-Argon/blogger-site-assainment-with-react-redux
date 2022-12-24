import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

export const loadBlogs = (data) => {
  return { type: GET_CONTENT, payload: data };
};

export const createBlogs = (data) => {
  return { type: ADD_CONTENT, payload: data };
};

export const removeBlogAction = (id) => {
  return { type: DELETE_CONTENT, payload: id };
};
