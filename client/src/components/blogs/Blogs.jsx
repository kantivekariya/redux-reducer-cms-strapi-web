import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import moment from 'moment';
import Header from "../../common/header/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../common/footer/Footer";
import { getBlogsById, getPopular } from "../../redux/action/blogAction";
import config from "../../_config/Config";

const Blogs = (props) => {
  console.log("param", props)
  const { BlogsId } = props.match.params
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const blogs_details = useSelector((state) => state.blogReducer.blogs_details);
  console.log("blogs_details", blogs_details)
  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(getBlogsById(BlogsId)).then((res) => { });
      // dispatch(getPopular()).then((res) => { });
    }
  }, [dispatch]);

  return (
    <>
      <div className="site-wrap">
        <Header />
        {blogs_details && blogs_details.data && (
          <div className="site-cover site-cover-sm same-height overlay single-page" style={{backgroundImage: `url(${config.BASE_URL}${blogs_details && blogs_details.data && blogs_details.data.cover && blogs_details.data.cover.url})`}}>
            <div className="container">
              <div className="row same-height justify-content-center">
                <div className="col-md-12 col-lg-10">
                  <div className="post-entry text-center">
                    <span className="post-category text-white bg-success mb-3">{blogs_details && blogs_details.data && blogs_details.data.category && blogs_details.data.category.category}</span>
                    <h1 className="mb-4">{blogs_details && blogs_details.data && blogs_details.data.title && blogs_details.data.title}</h1>
                    <div className="post-meta align-items-center text-center">
                      <figure className="author-figure mb-0 mr-3 d-inline-block"><img src={`${config.BASE_URL}${blogs_details && blogs_details.data && blogs_details.data.profile_image && blogs_details.data.profile_image.url && blogs_details.data.profile_image.url}`} alt="img_1" className="img-fluid" /></figure>
                      <span className="d-inline-block mt-1">By {blogs_details && blogs_details.data.author && blogs_details.data.author[0] && blogs_details.data.author[0].username}</span>
                      <span>&nbsp;-&nbsp; {moment(blogs_details && blogs_details.createdAt).format('MMMM DD, YYYY')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="site-section py-lg">
          <div className="container">
            <div className="row blog-entries element-animate">
              <div className="col-md-12 col-lg-8 main-content">
                <div className="post-content-body">
                  <div>{blogs_details && blogs_details.data && blogs_details.data.content && blogs_details.data.content[0] && blogs_details.data.content[0].Rich_text && parse(blogs_details.data.content[0].Rich_text)}</div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 sidebar">
                <div className="sidebar-box">
                  <h3 className="heading">Popular Posts</h3>
                  <div className="post-entry-sidebar">
                    <ul>
                      <li>
                        <Link to={`${window.location.pathname}`}>
                          <img src={require(`../../assets/img/img_1.jpg`)} alt="img_1" className="mr-4" />
                          <div className="text">
                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${window.location.pathname}`}>
                          <img src={require(`../../assets/img/img_2.jpg`)} alt="img_2" className="mr-4" />
                          <div className="text">
                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${window.location.pathname}`}>
                          <img src={require(`../../assets/img/img_3.jpg`)} alt="img_3" className="mr-4" />
                          <div className="text">
                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
