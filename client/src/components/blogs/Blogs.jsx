import React from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";

const Blogs = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />
        <div className="site-cover site-cover-sm same-height overlay single-page">
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  <span className="post-category text-white bg-success mb-3">Nature</span>
                  <h1 className="mb-4">The AI magically removes moving objects from videos.</h1>
                  <div className="post-meta align-items-center text-center">
                    <figure className="author-figure mb-0 mr-3 d-inline-block"><img src={require(`../../assets/img/person_1.jpg`)} alt="img_1" className="img-fluid" /></figure>
                    <span className="d-inline-block mt-1">By Carrol Atkinson</span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="site-section py-lg">
          <div className="container">
            <div className="row blog-entries element-animate">
              <div className="col-md-12 col-lg-8 main-content">
                <div className="post-content-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.</p>
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
