import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const ShippingScreen = () => {
    window.scrollTo(0, 0);
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>Địa chỉ giao hàng</h6>
                    <input type="text" placeholder="Nhập địa chỉ"></input>
                    <input type="text" placeholder="Nhập số điện thoại"></input>
                    <button type="submit">
                        <Link to="/payment" className="text-white">
                            Tiếp tục
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};
export default ShippingScreen;
