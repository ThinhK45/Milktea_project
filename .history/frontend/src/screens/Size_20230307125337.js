import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../Redux/Actions/cartActions.js';
const SizeScreen = ({ history }) => {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart);
    const { orderItems } = cart;

    const [size, setSize] = useState(orderItems.address);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ size }));
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
export default SizeScreen;
