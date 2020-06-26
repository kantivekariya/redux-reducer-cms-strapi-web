import React, { useRef, useEffect } from "react";
import parse from "html-react-parser";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs, getPopular } from "../../redux/action/blogAction";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import config from "../../_config/Config";

const Home = (props) => {
  const blogs = useSelector((state) => state.blogReducer.blogs);
  // const pop = useSelector((state) => state.blogPopularReducer.popular_blog);
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(getAllBlogs()).then((res) => {});
      // dispatch(getPopular()).then((res) => { });
    }
  }, [dispatch]);

  return (
    <>
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <Header />

        <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-stretch retro-layout-2">
              <div className="col-md-4">
                <Link
                  to={`${window.location.pathname}`}
                  className="h-entry mb-30 v-height gradient"
                  style={{
                    backgroundImage: `url(${require("../../assets/img/img_1.jpg")})`,
                  }}
                >
                  <div className="text">
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </Link>
                <Link
                  to={`${window.location.pathname}`}
                  className="h-entry v-height gradient"
                  style={{
                    backgroundImage: `url(${require("../../assets/img/img_2.jpg")})`,
                  }}
                >
                  <div className="text">
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  to={`${window.location.pathname}`}
                  className="h-entry img-5 h-100 gradient"
                  style={{
                    backgroundImage: `url(${require("../../assets/img/img_3.jpg")})`,
                  }}
                >
                  <div className="text">
                    <div className="post-categories mb-3">
                      <span className="post-category bg-danger">Travel</span>
                      <span className="post-category bg-primary">Food</span>
                    </div>
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  to={`${window.location.pathname}`}
                  className="h-entry mb-30 v-height gradient"
                  style={{
                    backgroundImage: `url(${require("../../assets/img/img_4.jpg")})`,
                  }}
                >
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </Link>
                <Link
                  to={`${window.location.pathname}`}
                  className="h-entry v-height gradient"
                  style={{
                    backgroundImage: `url(${require("../../assets/img/blog_bg.jpg")})`,
                  }}
                >
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <h2>Recent Posts</h2>
              </div>
            </div>
            <div className="row">
              {blogs &&
                blogs.data.map((value, index) => (
                  <div className="col-lg-4 mb-4" key={index}>
                    <div className="entry2">
                      <Link to={`blogs/${value.id}`}>
                        <img
                          src={`${config.BASE_URL}${
                            value && value.cover && value.cover.url
                          }`}
                          alt="blog"
                          className="img-fluid rounded"
                        />
                      </Link>
                      <div className="excerpt">
                        <span className="post-category text-white bg-secondary mb-3">
                          {value.category && value.category.category}
                        </span>
                        <h2 className="blog-title">
                          <Link to={`blogs/${value.id}`}>
                            {value && value.title && <>{parse(value.title)}</>}
                          </Link>
                        </h2>
                        <div className="post-meta align-items-center text-left clearfix">
                          <figure className="author-figure mb-0 mr-3 float-left">
                            <img
                              src={`${config.BASE_URL}${
                                value &&
                                value.profile_image &&
                                value.profile_image.url
                              }`}
                              alt="user"
                              className="img-fluid"
                            />
                          </figure>
                          {value &&
                            value.author &&
                            value.author[0] &&
                            value.author[0].username && (
                              <span className="d-inline-block mt-1">
                                By {value.author[0] && value.author[0].username}
                              </span>
                            )}
                          <span>
                            &nbsp;-&nbsp;{" "}
                            {moment(value && value.createdAt).format(
                              "MMMM DD, YYYY"
                            )}
                          </span>
                        </div>
                        <div className="blog-contain">
                          {value &&
                            value.content &&
                            value.content[0] &&
                            value.content[0].Rich_text && (
                              <>{parse(value.content[0].Rich_text)}</>
                            )}
                        </div>
                        <p>
                          <Link to={`blogs/${value.id}`}>Read More</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
