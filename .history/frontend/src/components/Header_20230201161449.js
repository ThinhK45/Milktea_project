import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Announcement">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center display-none">
                        <p>+ 961666166</p>
                        <p>milktea@gmail.com</p>
                    </div>
                    <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-center">
                        <Link to="">
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link to="">
                            <i className="fa fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
