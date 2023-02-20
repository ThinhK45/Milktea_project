import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product.js';
import products from './../../data/Products.js';

const MainProducts = () => {
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Sản phẩm</h2>
                <div>
                    <Link to="/addproduct" className="btn btn-primary">
                        Tạo mới
                    </Link>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <header className="card-header bg-white">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input
                                type="search"
                                placeholder="Tìm kiếm..."
                                className="form-control p-2"
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Tất cả loại </option>
                                <option>Trà sữa</option>
                                <option>Trà sữa 2</option>
                                <option>Trà sữa 3</option>
                            </select>
                        </div>

                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Mới nhất</option>
                                <option>Rẻ nhất</option>
                                <option>Nhiều người xem</option>
                            </select>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    );
};
