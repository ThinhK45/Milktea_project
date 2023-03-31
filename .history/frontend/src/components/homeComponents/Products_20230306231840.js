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
                    <div
                        id="carouselExampleControls"
                        class="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-inner">
                            {loading ? (
                                <div className="mb-3">
                                    <Loading />
                                </div>
                            ) : error ? (
                                <Message variant="alert-danger">
                                    {error}
                                </Message>
                            ) : (
                                <>
                                    {products.map((product) => (
                                        <div
                                            className="shop col-lg-4 col-md-6 col-sm-6 carousel-item active"
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
                                                    <div>
                                                        <Link
                                                            to={`/products/${product._id}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </div>

                                                    <div className="text-dark">
                                                        <Rating
                                                            value={
                                                                product.rating
                                                            }
                                                            text={` ${product.numReviews}  đánh giá`}
                                                        />{' '}
                                                    </div>
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
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="wrapper"></div>
                </div>
            </div>
            ;
        </>
    );
};
export default Products;
