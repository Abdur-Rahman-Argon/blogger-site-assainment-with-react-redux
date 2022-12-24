import {
  ADD_CONTENT,
  ADD_LOVE,
  DELETE_CONTENT,
  GET_CONTENT,
  REMOVE_LOVE,
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

export const addLovesBlogs = (data) => {
  return { type: ADD_LOVE, payload: data };
};

export const removeLovesBlogs = (id) => {
  return { type: REMOVE_LOVE, payload: id };
};
