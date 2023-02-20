import React from 'react';
import Sidebar from './../components/sidebar.js';
import Header from './../components/Header.js';
import EditProductMain from './../components/products/EditproductMain.js';
import products from './../data/Products.js';

const ProductEditScreen = ({ match }) => {
    const productId = products.find((p) => p._id === match.params.id);
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <EditProductMain productId={productId} />
            </main>
        </>
    );
};
export default ProductEditScreen;
