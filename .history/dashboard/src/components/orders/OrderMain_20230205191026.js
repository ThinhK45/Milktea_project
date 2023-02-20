import React from 'react';
import Orders from './Orders.js';

const OrderMain = () => {
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Đơn hàng</h2>
            </div>

            <div className="card mb-4 shadow-sm">
                <header className="card-header bg-white">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input
                                type="text"
                                className="form-control p-2"
                                placeholder="Tìm kiếm..."
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Trạng thái</option>
                                <option>Hiện </option>
                                <option>Ẩn</option>
                                <option>Hiện tất cả</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Hiện 20</option>
                            </select>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    );
};
