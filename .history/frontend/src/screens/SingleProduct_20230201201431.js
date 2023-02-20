import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Rating from './../components/homeComponents/Rating';
import Message from './../components/LoadingError/Error';
import products from '../data/Products';

const SingleProduct = React({ match }) => {
    const product = products.find((p) => p._id === match.params.id);
    return (
        <>
            <Header />
            <div className="container single-product">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-image">
                            <img src={product.image}  alt={product.name}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-dtl">
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                            </div>
                            <p>{product.description}</p>
                            <div className='product-count col-lg-7'>
                                <div className='flex-box d-flex justify-content-between align-items-center'>
                                    <h6>Giá</h6>
                                    <span>${product.price }</span>
                                </div>
                                <div className='flex-box d-flex justify-content-between align-items-center'>
                                    <h6>Trạng thái

                                    </h6>
                                    {product.countInStock > 0 ? (<span>Còn hàng</span>):(<span>Hết hàng</span>)}
                                </div>
                                <div className='flex-box d-flex justify-content-between align-items-center'>
                                    <h6>Đánh giá</h6>
                                    <Rating value={product.rating} text={ `${product.numReviews} đánh giá`} />
                                </div>
                                {product.countInStock > 0 ? (<>
                                    <div className='flex-box d-flex justify-content-between align-items-center'>
                                        <h6>Số lượng</h6>
                                        <select>
                                            {[...Array(product.countInStock).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}
                                        </select>
                                    </div>
                                    <button className='round-black-btn'>Thêm vào giỏ</button>
                                </>)}
                            </div>
        </div>

                    </div>
                </div>
            </div>
        </>
    )
}