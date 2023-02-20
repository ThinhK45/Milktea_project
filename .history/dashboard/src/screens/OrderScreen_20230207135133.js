import React from 'react';
import Sidebar from './../components/sidebar.js';
import Header from './../components/Header.js';
import OrderMain from '../components/orders/OrderMain.js';

const OrderScreen = ({ match }) => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <OrderMain />
            </main>
        </>
    );
};
export default OrderScreen;
