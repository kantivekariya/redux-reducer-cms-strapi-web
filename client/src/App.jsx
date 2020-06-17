import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoute } from "./_routes";
import configureStore from "./redux/store/configureStore";
import { setupAxios } from "./util/axios-config";

import "./App.scss";

const store = configureStore();
setupAxios();

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <AppRoute />
        </Router>
      </Provider>
    </>
  );
}

export default App;
