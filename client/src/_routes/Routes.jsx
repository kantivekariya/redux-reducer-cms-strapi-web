import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Spin } from "antd";
import Home from "../components/home/Home";
import Blogs from "../components/blogs/Blogs";
import Loader from "./Loader";
import { connect } from "react-redux";

const AppRoute = (props) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {Boolean(props.loadingBar.default) && (
          <Spin
            size="large"
            className={`ajax-global-spin`}
            wrapperClassName={`ajax-global-spin`}
            spinning={true}
          />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={`/blogs/:BlogsId`} component={Blogs} />
        </Switch>
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingBar: state.loadingBar,
  };
};

export default connect(mapStateToProps)(AppRoute);
