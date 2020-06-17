import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import rootReducer from "../../redux/reducer/index";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      loadingBarMiddleware({
        promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"],
      })
    )
  );
}
