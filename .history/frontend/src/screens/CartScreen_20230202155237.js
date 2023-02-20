import React from 'react';
import Header from './../components/Header';
import { Link } from 'react-router-dom';

const CartScreen = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />

            {/*Cart */}
            <div className="container">
                {/*
            <div className="alert alert-info text-center mt-3"> Giỏ hàng trống

            <Link className="btn btn-success mx-5 px-5 py-3" to="/" style={{ fontSize: '12px' }}> Mua ngay
            </Link>
            </div>

         */}
                <div className="alert alert-info text-center mt-3">
                    Giá trị sản phẩm trong giỏ
                    <Link className="text-success mx-2" to="/cart">
                        (4)
                    </Link>
                </div>
                {/* cartItem */}
                <div className="cart-iterm row">
                    <div className="remove-button d-flex justify-content-center align-items-center">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="cart-image col-md-3">
                        <img src="/images/2.png" alt="milktea" />
                    </div>
                    <div className="cart-text col-md-5 d-flex align-items-center">
                        <Link to="#">
                            <h4>Milktea</h4>
                        </Link>
                    </div>
                    <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                        <h6>Số lượng</h6>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-item-md-end align-items-start d-flex flex-column justify-content-center col-sm-7">
                        <h6>Tổng</h6>
                        <h4>$545</h4>
                    </div>
                </div>
                {/* End of cart iterms */}

                <div className="total">
                    <span className="sub">Tổng:</span>
                    <span className="total-price">$567</span>
                </div>
                <hr />
                <div className="cart-buttons d-flex align-items-center row">
                    <Link to="/" className="col-md-6">
                        <button>Tiếp tục mua</button>
                    </Link>
                    <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                        <button>
                            <Link to="/shipping" className="text-white">
                                Thanh toán
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CartScreen;
