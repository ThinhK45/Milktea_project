import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AddProductMain = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const productCreate = useSelector((state) => state.productCreate);
    const { loading, error, product } = productCreate;

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
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập ở đây"
                                            id="product_title"
                                            required
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
                                            id="product-price"
                                            required
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
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">
                                            Mô tả
                                        </label>
                                        <textarea
                                            placeholder="Nhập ở đây"
                                            className="form-control"
                                            rows="7"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">
                                            Hình ảnh
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Nhập đường dẫn hình"
                                        />
                                        <input
                                            className="form-control mt-3"
                                            type="file"
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
export default AddProductMain;
