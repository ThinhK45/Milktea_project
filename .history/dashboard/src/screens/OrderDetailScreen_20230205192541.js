import React from 'react';
import Sidebar from './../components/sidebar.js';
import Header from './../components/Header.js';
import OrderDetailmain from '../components/orders/OrderDetailmain.js';

const OrderDetailScreen = () => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <OrderDetailmain />
            </main>
        </>
    );
};
export default OrderDetailScreen;
