import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const NotFound = () => {
    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">
                    <h4 className="text-center mb-2 mb-sm-5">
                        Trang không tồn tại
                    </h4>
                    <img
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'contain',
                        }}
                        src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg"
                        alt="Not-Found"
                    />
                    <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
                        <Link
                            to="/"
                            className="text-white text-decoration-none"
                        >
                            Trang chủ
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};
export default NotFound;