import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../Redux/Actions/cartActions';
import Header from './../components/Header';

const PaymentScreen = ({ history }) => {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [paymentMethod, setPaymentMethod] = useState('Paypal');

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
                    className="Login2 col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>Chọn phương thức thanh toán</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="PayPal"
                            />
                            <label className="form-check-label">
                                PayPal hoặc thẻ tín dụng{' '}
                            </label>
                        </div>
                    </div>
                    <button type="submit">Tiếp tục</button>
                </form>
            </div>
        </>
    );
};
export default PaymentScreen;
