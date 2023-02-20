import React from 'react';
import { Link } from 'react-router-dom';

const AddProductMain = () => {
    return (
        <>
            <section className="content-main" style={{ maxWidth: '1200px' }}>
                <form>
                    <div className="content-header">
                        <Link
                            to="/products"
                            className="btn btn-danger text-white"
                        >
                            Đi đến sản phẩm
                        </Link>
                        <h2 className="content-title">Thêm sản phẩm</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Đăng ngay
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="product_title"
                                            className="form-label"
                                        >
                                            Chi tiết sản phẩm
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};
