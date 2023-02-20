import React from 'react';
import Sidebar from './../components/sidebar.js';
import Header from './../components/Header.js';
import MainProducts from './../components/products/MainProducts.js';

const ProductScreen = () => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <MainProducts />
            </main>
        </>
    );
};
export default ProductScreen;
