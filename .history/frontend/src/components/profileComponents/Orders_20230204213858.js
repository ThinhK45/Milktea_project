import React from 'react';
import Loading from './../LoadingError/Loading.js';
import Message from './../LoadingError/Error.js';
import { Link } from 'react-router-dom';

const Orders = (props) => {
    const { loading, error, orders } = props;
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="alert-danger">{error}</Message>
            ) : (
                <>
                    {orders.length === 0 ? (
                        <div className="col-12 alert alert-info text-center mt-3">
                            Không có đơn hàng
                            <Link
                                className="btn btn-success mx-2 px-3 py-2"
                                to="/"
                                style={{ fontSize: '12px' }}
                            >
                                Bắt đầu mua sắm
                            </Link>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày</th>
                                        <th>Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr
                                            className={`${
                                                order.isPaid
                                                    ? 'alert-success'
                                                    : 'alert-danger'
                                            }`}
                                            key={order._id}
                                        >
                                            <td>
                                                <a href={`/`} className="link">
                                                    1
                                                </a>
                                            </td>
                                            <td>Paid</td>
                                            <td>Dec 12 2021</td>
                                            <td>65$</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
export default Orders;
