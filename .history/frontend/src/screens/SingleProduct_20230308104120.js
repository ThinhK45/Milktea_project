import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Rating from './../components/homeComponents/Rating';
import Message from './../components/LoadingError/Error';
import { useDispatch, useSelector } from 'react-redux';

import {
    createProductReview,
    listProductDetails,
} from '../Redux/Actions/ProductActions';
import Loading from './../components/LoadingError/Loading.js';
import { PRODUCT_CREATE_REVIEW_RESET } from '../Redux/Constants/ProductConstants';
import moment from 'moment';
import Products from './../components/homeComponents/Products.js';
const SingleProduct = ({ history, match }) => {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [size, setSize] = useState(0);

    const productId = match.params.id;
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productCreateReview = useSelector(
        (state) => state.productCreateReview
    );
    const {
        loading: loadingCreateReview,
        error: errorCreateReview,
        success: successCreateReview,
    } = productCreateReview;

    useEffect(() => {
        if (successCreateReview) {
            alert('Đã gửi đánh giá');
            setRating(0);
            setComment('');
            dispatch({
                type: PRODUCT_CREATE_REVIEW_RESET,
            });
        }
        dispatch(listProductDetails(productId, size));

        // dispatch(listProductDetails(productId));
    }, [dispatch, productId, successCreateReview, size]);

    const AddToCartHandle = (e) => {
        e.preventDefault();
        history.push(`/cart/${productId}?qty=${qty}&?size=${size}`);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProductReview(productId, {
                rating,
                comment,
            })
        );
    };
    return (
        <>
            <Header />
            <div className="container single-product">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                ) : (
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-image">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-dtl">
                                    <div className="product-info">
                                        <div className="product-name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <p>{product.description}</p>
                                    <div className="product-count col-lg-7">
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>Giá</h6>
                                            <span>{product.price} VNĐ</span>
                                        </div>
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>Trạng thái</h6>
                                            {product.countInStock > 0 ? (
                                                <span>Còn hàng</span>
                                            ) : (
                                                <span>Hết hàng</span>
                                            )}
                                        </div>
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>Đánh giá</h6>
                                            <Rating
                                                value={product.rating}
                                                text={`
                                                 ${product.numReviews} Đánh giá`}
                                            />
                                        </div>
                                        {product.countInStock > 0 ? (
                                            <>
                                                <div className="flex-box d-flex justify-content-between align-items-center">
                                                    <h6>Số lượng</h6>
                                                    <select
                                                        value={qty}
                                                        onChange={(e) =>
                                                            setQty(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {[
                                                            ...Array(
                                                                product.countInStock
                                                            ).keys(),
                                                        ].map((x) => (
                                                            <option
                                                                key={x + 1}
                                                                value={x + 1}
                                                            >
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="flex-box d-flex justify-content-between align-items-center">
                                                    <h6>Kích cỡ</h6>
                                                    <select
                                                        value={size}
                                                        onChange={(e) =>
                                                            setSize(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="col-12 bg-light mt-2 border-0 rounded"
                                                    >
                                                        <option value="">
                                                            Chọn...
                                                        </option>
                                                        <option value="0">
                                                            Vừa
                                                        </option>
                                                        <option value="1">
                                                            Lớn
                                                        </option>
                                                    </select>
                                                </div>
                                                <button
                                                    onClick={AddToCartHandle}
                                                    className="round-black-btn"
                                                >
                                                    Thêm vào giỏ
                                                </button>
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RATING */}
                        <div className="row my-5">
                            <div className="col-md-6">
                                <h6 className="mb-3">Đánh giá</h6>

                                {product.reviews.length === 0 && (
                                    <Message variant={'alert-info mt-3'}>
                                        Không có đánh giá
                                    </Message>
                                )}

                                {product.reviews.map((review) => (
                                    <div
                                        className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                                        key={review._id}
                                    >
                                        <strong>{review.name}</strong>
                                        <Rating value={review.rating} />
                                        <span>
                                            {moment(
                                                review.createdAt
                                            ).calendar()}
                                        </span>
                                        <div className="alert alert-info mt-3">
                                            {review.comment}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6">
                                <h6>Đánh giá của bạn</h6>

                                <div className="my-4">
                                    {loadingCreateReview && <Loading />}

                                    {errorCreateReview && (
                                        <Message variant="alert-danger">
                                            {errorCreateReview}
                                        </Message>
                                    )}
                                </div>

                                {userInfo ? (
                                    <form onSubmit={submitHandler}>
                                        <div className="my-4">
                                            <strong>Xếp hạng</strong>
                                            <select
                                                value={rating}
                                                onChange={(e) =>
                                                    setRating(e.target.value)
                                                }
                                                className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                            >
                                                <option value="">
                                                    Chọn...
                                                </option>
                                                <option value="1">
                                                    1 - Rất tệ
                                                </option>
                                                <option value="2">
                                                    2 - Tệ
                                                </option>
                                                <option value="3">
                                                    3 - Tạm được
                                                </option>
                                                <option value="4">
                                                    4 - Tốt
                                                </option>
                                                <option value="5">
                                                    5 - Rất tốt
                                                </option>
                                            </select>
                                        </div>
                                        <div className="my-4">
                                            <strong>Bình luận</strong>
                                            <textarea
                                                row="3"
                                                value={comment}
                                                onChange={(e) =>
                                                    setComment(e.target.value)
                                                }
                                                className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                            ></textarea>
                                        </div>
                                        <div className="my-3">
                                            <button
                                                disabled={loadingCreateReview}
                                                className="col-12 bg-black border-0 p-3 rounded text-white"
                                            >
                                                Đồng ý
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="my-3">
                                        <Message variant={'alert-warning'}>
                                            Vui lòng{' '}
                                            <Link to="/login">
                                                "<strong>Đăng nhập</strong>"
                                            </Link>{' '}
                                            để viết bình luận{' '}
                                        </Message>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Products />
        </>
    );
};
export default SingleProduct;
