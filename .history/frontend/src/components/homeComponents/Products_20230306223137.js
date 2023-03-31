import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../Redux/Actions/ProductActions.js';
import Loading from '../LoadingError/Loading.js';
import Message from '../LoadingError/Error.js';
const Products = (props) => {
    const { keyword, pagenumber } = props;
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct(keyword, pagenumber));
    }, [dispatch, keyword, pagenumber]);
    return (
        <>
            <div className="container">
                <h4>Các sản phẩm liên quan</h4>
                <div className="shopcontainer row">
                    <div className="wrapper">
                        {loading ? (
                            <div className="mb-3">
                                <Loading />
                            </div>
                        ) : error ? (
                            <Message variant="alert-danger">{error}</Message>
                        ) : (
                            <>
                                {products.map((product) => (
                                    <div
                                        className="shop col-lg-4 col-md-6 col-sm-6 box"
                                        key={product._id}
                                    >
                                        <div className="border-product">
                                            <Link
                                                to={`/products/${product._id}`}
                                            >
                                                <div className="shopBack">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                    />{' '}
                                                </div>
                                            </Link>
                                            <div className="shoptext">
                                                <p>
                                                    <Link
                                                        to={`/products/${product._id}`}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </p>

                                                <p className="text-dark">
                                                    <Rating
                                                        value={product.rating}
                                                        text={` ${product.numReviews}  đánh giá`}
                                                    />{' '}
                                                </p>
                                                <h3>
                                                    Giá: {product.price} VNĐ
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
            ;
        </>
    );
};
export default Products;
