import React, { useRef, useEffect } from "react";
import parse from 'html-react-parser';
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs } from "../../redux/action/blogAction";
import { Link } from "react-router-dom";

const Home = (props) => {
  const blogs = useSelector((state) => state.blogReducer.blogs);
  console.log(blogs)
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(getAllBlogs()).then((res) => { });
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

        <header className="site-navbar" role="banner">
          <div className="container-fluid">
            <div className="row align-items-center">

              <div className="col-12 search-form-wrap js-search-form">
                <form method="get" action="#">
                  <input type="text" id="s" className="form-control" placeholder="Search..." />
                  <button className="search-btn" type="submit"><span className="icon-search"></span></button>
                </form>
              </div>

              <div className="col-4 site-logo">
                <Link to={`${window.location.pathname}`} className="text-black h2 mb-0">Mini Blog</Link>
              </div>

              <div className="col-8 text-right">
                <nav className="site-navigation" role="navigation">
                  <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                    <li><Link to={`${window.location.pathname}`}>Home</Link></li>
                    <li><Link to={`${window.location.pathname}`}>Politics</Link></li>
                    <li><Link to={`${window.location.pathname}`}>Tech</Link></li>
                    <li><Link to={`${window.location.pathname}`}>Entertainment</Link></li>
                    <li><Link to={`${window.location.pathname}`}>Travel</Link></li>
                    <li><Link to={`${window.location.pathname}`}>Sports</Link></li>
                    <li className="d-none d-lg-inline-block"><Link to={`${window.location.pathname}`} className="js-search-toggle"><span className="icon-search"></span></Link></li>
                  </ul>
                </nav>
                <Link to={`${window.location.pathname}`} className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></Link></div>
            </div>

          </div>
        </header>

        <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-stretch retro-layout-2">
              {/* images */}
            </div>
          </div>
        </div>


        <div className="site-section">
          <div className="container">
            <div className="row">
              {blogs &&
                blogs.data.map((value, index) => (
                  <div className="col-lg-4 mb-4" key={index}>
                    <div className="entry2">
                      <Link to={`${window.location.pathname}`}><img src={value && value.Cover && value.Cover.url} alt="blog" className="img-fluid rounded" /></Link>
                      <div className="excerpt">
                        <span className="post-category text-white bg-secondary mb-3">Politics</span>
                        <h2 className="blog-title"><Link to={`${window.location.pathname}`}>{value && value.Title && <>{parse(value.Title)}</>}</Link></h2>
                        <div className="post-meta align-items-center text-left clearfix">
                          <figure className="author-figure mb-0 mr-3 float-left"><img src={require(`../../assets/img/person_1.jpg`)} alt="user" className="img-fluid" /></figure>
                          <span className="d-inline-block mt-1">By <Link to={`${window.location.pathname}`}>Carrol Atkinson</Link></span>
                          <span>&nbsp;-&nbsp; July 19, 2019</span>
                        </div>
                        <div className="blog-contain">{value && value.Content && value.Content[0] && value.Content[0].Rich_text && <>{parse(value.Content[0].Rich_text)}</>}</div>
                        <p><Link to={`${window.location.pathname}`}>Read More</Link></p>
                      </div>
                    </div>
                  </div>))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
