import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './../LoadingError/Loading';
import Message from './../LoadingError/Error';
import moment from 'moment';
const LatestOrder = (props) => {
    const { loading, error, orders } = props;
    return (
        <div className="card-body">
            <h3 className="card-title">Đơn hàng mới</h3>

            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="alert-danger">{error}</Message>
            ) : (
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            {orders.slice(0, 5).map((order) =>
                                order._id ? (
                                    <tr key={order._id}>
                                        <td>
                                            <b>{order.user.name}</b>
                                        </td>
                                        <td>{order.user.email}</td>
                                        <td>{order.totalPrice} VNĐ</td>
                                        <td>
                                            {order.isPaid ? (
                                                <span className="badge rounded-pill alert-success">
                                                    Thanh toán vào lúc:{' '}
                                                    {moment(
                                                        order.paidAt
                                                    ).format('MMM Do YY')}
                                                </span>
                                            ) : (
                                                <span className="badge rounded-pill alert-danger">
                                                    Chưa thanh toán
                                                </span>
                                            )}
                                        </td>
                                        <td>
                                            {moment(order.createdAt).calendar()}
                                        </td>
                                        <td className="d-flex justify-content-end align-item-center">
                                            <Link
                                                to={`/order/${order._id}`}
                                                className="text-success"
                                            >
                                                <i className="fas fa-eye"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ) : null
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
export default LatestOrder;
