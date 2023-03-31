import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './../components/Header';
import { saveShippingAddress } from '../Redux/Actions/cartActions.js';
const ShippingScreen = ({ history }) => {
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
            <div className="flex-box d-flex justify-content-between align-items-center">
                <h6>Kích cỡ</h6>
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="Nhỏ" key="Nhỏ">
                        Nhỏ
                    </option>
                    <option value="Vừa" key="Vừa">
                        Vừa
                    </option>
                    <option value="Lớn" key="Lớn">
                        Lớn
                    </option>
                </select>
            </div>
        </>
    );
};
export default ShippingScreen;
