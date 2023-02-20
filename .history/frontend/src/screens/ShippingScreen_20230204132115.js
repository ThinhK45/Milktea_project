import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './../components/Header';
import { saveShippingAddress } from '../Redux/Actions/cartActions.js';
const ShippingScreen = (history) => {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [phone, setPhone] = useState(shippingAddress.phone);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, phone }));
        history.push('/payment');
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
