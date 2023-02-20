import React from 'react';
import Toast from './../LoadingError/Toast';
import { Link } from 'react-router-dom';

const EditProductMain = (props) => {
    const { productId } = props;

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
                        <h2 className="content-title">Cập nhật sản phẩm</h2>
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
                                            Tiêu đề sản phẩm
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Nhập ở đây"
                                            className="form-control"
                                            id="product_title"
                                            required
                                            value={productId.name}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="product_price"
                                            className="form-label"
                                        >
                                            Giá
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Nhập ở đây"
                                            className="form-control"
                                            id="product_price"
                                            required
                                            value={productId.price}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="product_price"
                                            className="form-label"
                                        >
                                            Số lượng hàng còn
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Nhập ở đây"
                                            className="form-control"
                                            id="product_price"
                                            required
                                            value={productId.price}
                                        />
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

export default EditProductMain;
