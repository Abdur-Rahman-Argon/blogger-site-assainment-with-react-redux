import { applyMiddleware, createStore } from "redux";
import blogReducer from "./reducers..js/blogReducer.";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  blogReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
