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
                            <input type="text" placeholder="Tìm kiếm..." />
                        </div>
                    </div>
                </header>
            </div>
        </section>
    );
};
