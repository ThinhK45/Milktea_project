import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import { PayPalButton } from 'react-paypal-button-v2';

const OrderScreen = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            <div className="container">
                <div className="row order-detail">
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Customer</strong>
                                </h5>
                                <p>Admin</p>
                                <p>
                                    <a href={`mailto:admin@example.com`}>
                                        admin@example.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Thông tin đơn hàng</strong>
                                </h5>
                                <p>Đang vận chuyển</p>
                                <p>Phương thức thanh toán: Paypal</p>
                                <div className="bg-info p-2 col-12">
                                    <p className="text-white text-center text-sm-start">
                                        Thanh toán vao Jan 12 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
