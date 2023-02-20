import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { product } = props;

    return (
        <>
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
                <div className="card card-product-grid shadow-sm">
                    <Link to="#" className="img-wrap">
                        <img src={product.image} alt="Sản phẩm" />
                    </Link>
                </div>
            </div>
        </>
    );
};
