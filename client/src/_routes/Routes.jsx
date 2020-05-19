import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../components/home";

const AppRoute = () => {
  return (
    <>
      <Switch>
        <Route to={`/`} component={Home} />
      </Switch>
    </>
  );
};

export { AppRoute };
