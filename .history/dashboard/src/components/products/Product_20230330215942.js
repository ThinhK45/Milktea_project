import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Redux/Actions/ProductActions.js';

import { deleteProduct } from '../../Redux/Actions/ProductActions';

const Product = (props) => {
    const { product, keyword } = props;
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        if (window.confirm('Bạn muốn xóa dữ liệu này')) {
            dispatch(deleteProduct(id));
        }
    };
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(productList(keyword));
    }, [dispatch, keyword]);
    return (
        <>
            <div className="col-md-6 col-sm-6 col-lg-4 mb-5">
                <div className="card card-product-grid shadow-sm">
                    <Link to="#" className="img-wrap">
                        <img src={product.image} alt="Sản phẩm" />
                    </Link>
                    <div className="info-wrap">
                        <Link to="#" className="title text-truncate">
                            {product.name}
                        </Link>
                        <div className="price mb-2">{product.price} VNĐ</div>
                        <div className="row">
                            <Link
                                to={`/product/${product._id}/edit`}
                                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                            >
                                <i className="fas fa-pen"></i>
                            </Link>

                            <Link
                                to="#"
                                onClick={() => deleteHandler(product._id)}
                                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                            >
                                <i className="fas fa-trash-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Product;
