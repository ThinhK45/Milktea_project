import React from 'react';
import Sidebar from './../components/sidebar.js';
import Header from './../components/Header.js';
import AddProductMain from './../components/products/AddProductMain.js';

const AddProduct = () => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <AddProductMain />
            </main>
        </>
    );
};
export default AddProduct;
