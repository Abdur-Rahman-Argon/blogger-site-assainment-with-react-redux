import {
  ADD_CONTENT,
  ADD_LOVE,
  DELETE_CONTENT,
  GET_CONTENT,
  READING_HISTORY,
  REMOVE_LOVE,
  TOGGLE_LATEST,
  TOGGLE_OLDEST,
  UPDATE_CONTENT,
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

export const updateBlogs = (id) => {
  return { type: UPDATE_CONTENT, payload: id };
};

export const addReadingHistory = (data) => {
  return { type: READING_HISTORY, payload: data };
};

export const removeLovesBlogs = (id) => {
  return { type: REMOVE_LOVE, payload: id };
};

export const latestBlogs = (late) => {
  return { type: TOGGLE_LATEST, payload: late };
};
export const oldestBlogs = (old) => {
  return { type: TOGGLE_OLDEST, payload: old };
};
