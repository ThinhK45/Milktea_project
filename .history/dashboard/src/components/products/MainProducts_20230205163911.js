import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product.js';
import products from './../../data/Products.js';

const MainProducts = () => {
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
        </section>
    );
};
