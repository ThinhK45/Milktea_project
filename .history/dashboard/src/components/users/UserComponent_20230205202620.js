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

                {/* Card */}
                <div className="card-body">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        <div className="col">
                            <div className="card card-user shadow-sm">
                                <div className="card-header">
                                    <img
                                        className="img-md img-avatar"
                                        src="images/favicon.png"
                                        alt="Người dùng"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title mt-5">Admin</h5>
                                    <div className="card-text text-muted">
                                        <p className="m-0">Admin</p>
                                        <p>
                                            <a
                                                href={`mailto:admin@example.com`}
                                            >
                                                admin@example.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User */}

                        <div className="col">
                            <div className="card card-user shadow-sm">
                                <div className="card-header">
                                    <img
                                        className="img-md img-avatar"
                                        src="images/favicon.png"
                                        alt="Người dùng"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="cart-title mt-5">
                                        Người dùng
                                    </h5>
                                    <div className="card-text text-muted">
                                        <p className="m-0">Khách hàng</p>
                                        <p>
                                            <a
                                                href={`mailto:admin@example.com`}
                                            >
                                                User@example.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* NAV */}
                    <nav className="float-end mt-4" aria-label="Phân trang">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">
                                    Trước
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    Sau
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};
export default UserComponent;
