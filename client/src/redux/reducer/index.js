import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { blogReducer } from "./blogReducer";
// import { blogPopularReducer } from "./blogPopularReducer";

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  blogReducer,
  // blogPopularReducer
});

export default rootReducer;
