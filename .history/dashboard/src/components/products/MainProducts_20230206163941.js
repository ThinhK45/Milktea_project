import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product.js';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Redux/Actions/ProductActions.js';

const MainProducts = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts);
    }, [dispatch]);
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
                                <option>Xem nhiều nhất</option>
                            </select>
                        </div>
                    </div>
                </header>

                <div className="card-body">
                    <div className="row">
                        {/* Products */}
                        {products.map((product) => (
                            <Product product={product} key={product._id} />
                        ))}
                    </div>

                    <nav
                        className="float-end mt-4"
                        aria-label="Page navigation"
                    >
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
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    Tiếp
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};
export default MainProducts;
