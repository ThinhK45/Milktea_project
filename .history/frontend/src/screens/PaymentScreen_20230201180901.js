import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const PaymentScreen = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
        </>
    );
};
