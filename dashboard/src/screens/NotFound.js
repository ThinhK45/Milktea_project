import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
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
                        src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg"
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
