import React from 'react';
import Sidebar from './../components/sidebar.js';
import Header from './../components/Header.js';
import OrderMain from '../components/orders/OrderMain.js';

const OrderScreen = ({ match }) => {
    const orderId = match.params.id;

    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <OrderMain orderId={orderId} />
            </main>
        </>
    );
};
export default OrderScreen;
