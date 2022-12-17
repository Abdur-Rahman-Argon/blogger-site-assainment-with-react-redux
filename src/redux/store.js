import { createStore } from "redux";
import blogReducer from "./reducers..js/blogReducer.";

const store = createStore(blogReducer);

export default store;
