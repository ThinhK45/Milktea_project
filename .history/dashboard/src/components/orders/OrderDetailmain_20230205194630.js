import React from 'react';
import OrderDetailProducts from './OrderDetailProducts.js';
import OrderDetailInfo from './OrderDetailInfo.js';
import { Link } from 'react-router-dom';

const OrderDetailmain = () => {
    return (
        <section className="content-main">
            <div className="content-header">
                <Link to="/orders" className="btn btn-dark text-white">
                    Trở lại đơn hàng
                </Link>
            </div>

            <div className="card">
                <header className="card-header p-3 Header-green">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <span>
                                <i className="far fa-calendar-alt mx-2">
                                    <b className="text-white">Dec 12 2022 </b>
                                </i>
                            </span>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    );
};
