import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import { PayPalButton } from 'react-paypal-button-v2';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetails } from '../Redux/Actions/OrderActions';
import Loading from './../components/LoadingError/Loading';
import Message from '../components/LoadingError/Error';
import moment from 'moment';
const OrderScreen = ({ match }) => {
    window.scrollTo(0, 0);

    const [sdkReady, setSdkReady] = useState(false);

    const orderId = match.params.id;
    const dispatch = useDispatch('');
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const orderPay = useSelector((state) => state.orderPay);
    const { loading: loadingPay, success: seuccessPay } = orderPay;

    if (!loading) {
        const addDecimals = (num) => {
            return Math.round((num * 100) / 100).toFixed(0);
        };
        order.itemsPrice = addDecimals(
            order.orderItems.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            )
        );
    }

    useEffect(() => {
        dispatch(getOrderDetails(orderId));
    }, [dispatch, orderId]);

    return (
        <>
            <Header />
            <div className="container">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                ) : (
                    <>
                        <div className="row order-detail">
                            <div className="col-lg-4 col-sm-4 col-md-4 col-12 mb-lg-4 mb-5 mb-sm-0">
                                <div className="row">
                                    <div className="col-md-4 center">
                                        <div className="alert-success order-box">
                                            <i className="fas fa-user"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-8 center">
                                        <h5>
                                            <strong>Khách hàng</strong>
                                        </h5>
                                        <p>{order.user.name}</p>
                                        <p>
                                            <a
                                                href={`mailto:${order.user.email}`}
                                            >
                                                {order.user.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="col-lg-4 mb-lg-4 mb-5 mb-sm-0 col-sm-4 col-md-4 col-12">
                                <div className="row">
                                    <div className="col-md-4 center">
                                        <div className="alert-success order-box">
                                            <i className="fas fa-truck-moving"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-8 center">
                                        <h5>
                                            <strong>Thông tin đơn hàng</strong>
                                        </h5>
                                        <p>
                                            Vận chuyển:
                                            {order.shippingAddress.address}
                                        </p>
                                        <p>
                                            Phương thức thanh toán:
                                            {order.paymentMethod}
                                        </p>

                                        {order.isPaid ? (
                                            <div className="bg-info p-2 col-12">
                                                <p className="text-white text-center text-sm-start">
                                                    Thanh toán vào
                                                    {moment(
                                                        order.paidAt
                                                    ).calendar()}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="bg-danger p-2 col-12">
                                                <p className="text-white text-center text-sm-start">
                                                    Chưa thanh toán
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="col-lg-4 col-sm-4 col-md-4 col-12 mb-lg-4 mb-5 mb-sm-0">
                                <div className="row">
                                    <div className="col-md-4 center">
                                        <div className="alert-success order-box">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-8 center">
                                        <h5>
                                            <strong>Giao hàng đến</strong>
                                        </h5>
                                        <p>
                                            Địa chỉ:{' '}
                                            {order.shippingAddress.address}
                                        </p>
                                        {order.isDelivered ? (
                                            <div className="bg-info p-2 col-12">
                                                <p className="text-white text-center text-sm-start">
                                                    Đã giao hàng vào lúc
                                                    {moment(
                                                        order.deliveredAt
                                                    ).calendar()}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="bg-danger p-2 col-12">
                                                <p className="text-white text-center text-sm-start">
                                                    Chưa giao hàng
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row order-products justify-content-between">
                            <div className="col-lg-8">
                                {order.orderItems.length === 0 ? (
                                    <Message variant="alert-info mt-5">
                                        Đơn hàng trống
                                    </Message>
                                ) : (
                                    <>
                                        {order.orderItems.map((item, index) => (
                                            <div
                                                className="order-product row"
                                                key={index}
                                            >
                                                <div className="col-md-3 col-6">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                </div>
                                                <div className="col-md-5 col-6 d-flex align-items-center">
                                                    <Link
                                                        to={`/products/${item.product}`}
                                                    >
                                                        <h6>{item.name}</h6>
                                                    </Link>
                                                </div>
                                                <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                                                    <h4>Số lượng</h4>
                                                    <h6>{item.qty}</h6>
                                                </div>
                                                <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                                                    <h4>Tổng</h4>
                                                    <h6>{item.price} VNĐ</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                            {/*total*/}
                            <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>Sản phẩm</strong>
                                            </td>
                                            <td>{order.itemsPrice} VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Vận chuyển</strong>
                                            </td>
                                            <td>{order.shippingPrice} VNĐ</td>
                                        </tr>
                                        {/* <tr>
                                <td>
                                    <strong>Thuế</strong>
                                </td>
                                <td>$5</td>
                            </tr> */}
                                        <tr>
                                            <td>
                                                <strong>Tổng</strong>
                                            </td>
                                            <td>{order.totalPrice} VNĐ</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="col-12">
                                    <PayPalButton amount={345} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default OrderScreen;
