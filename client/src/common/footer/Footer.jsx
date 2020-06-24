import React from 'react';
import moment from 'moment';

const Footer = () => {
    return (
        <>
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>
                                Copyright &copy; {moment().format('YYYY')} All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;