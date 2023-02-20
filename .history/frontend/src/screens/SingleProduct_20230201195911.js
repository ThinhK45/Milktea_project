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
                      </div>
                            </div>
        </div>

                    </div>
                </div>
            </div>
        </>
    )
}