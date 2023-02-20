import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './../components/Header';

const ShippingScreen = () => {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [phone, setPhone] = useState(shippingAddress.phone);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>Địa chỉ giao hàng</h6>
                    <input
                        type="text"
                        placeholder="Nhập địa chỉ"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nhập số điện thoại"
                        value={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit">Tiếp tục</button>
                </form>
            </div>
        </>
    );
};
export default ShippingScreen;
