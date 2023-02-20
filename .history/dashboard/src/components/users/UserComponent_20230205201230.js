import React from 'react';
import { Link } from 'react-router-dom';

const UserComponent = () => {
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Khách hàng</h2>
                <div>
                    <Link to="#" className="btn btn-primary">
                        <i className="material-icons md-plus"></i> Tạo mới
                    </Link>
                </div>
            </div>

            <div className="card mb-4">
                <header className="card-header">
                    <div className="row gx-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className="form-control"
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Hiển thị 20</option>
                                <option>Hiển thị 30</option>
                                <option>Hiển thị 40</option>
                                <option>Hiển thị tất cả</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Trạng thái: tất cả</option>
                                <option>Hiển thị: duy nhất</option>
                                <option>Ẩn</option>
                            </select>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    );
};
