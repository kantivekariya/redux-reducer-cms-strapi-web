import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Blogs from "../components/blogs/Blogs";

const AppRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`/blogs`} component={Blogs} />
      </Switch>
    </>
  );
};

export { AppRoute };
