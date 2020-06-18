import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
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
                            <Link to={`${window.location.pathname}`} className="text-black h2 mb-0">Strapi CMS Blogs</Link>
                        </div>

                        <div className="col-8 text-right">
                            <nav className="site-navigation" role="navigation">
                                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0 pr-5">
                                    <li><Link to={`${window.location.pathname}`}>Home</Link></li>
                                    <li><Link to={`${window.location.pathname}`}>About</Link></li>
                                    <li><Link to={`${window.location.pathname}`}>Contact</Link></li>
                                    <li className="d-none d-lg-inline-block"><Link to={`${window.location.pathname}`} className="js-search-toggle"><span className="icon-search"></span></Link></li>
                                </ul>
                            </nav>
                            <Link to={`${window.location.pathname}`} className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></Link>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;