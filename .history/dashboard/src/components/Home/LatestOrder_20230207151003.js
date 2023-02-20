import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './../LoadingError/Loading';

const LatestOrder = (props) => {
    const { loading, error, orders } = props;
    return (
        <div className="card-body">
            <h5 className="card-title">Đơn hàng mới</h5>

            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="alert-danger">{error}</Message>
            ) : (
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <b>Người dùng</b>
                                </td>
                                <td>admin@gmail.com</td>
                                <td>345 VNĐ</td>
                                <td>
                                    <span className="badge rounded-pill alert-success">
                                        Thanh toán vào lúc 10: 13 AM
                                    </span>
                                </td>
                                <td>Hôm nay lúc 10:13</td>
                                <td className="d-flex justify-content-end align-item-center">
                                    <Link
                                        to={`/order`}
                                        className="text-success"
                                    >
                                        <i className="fas fa-eye"></i>
                                    </Link>
                                </td>
                            </tr>

                            {/* Chưa thanh toán */}

                            <tr>
                                <td>
                                    <b>Người dùng</b>
                                </td>
                                <td>user@gmail.com</td>
                                <td>333 VNĐ</td>
                                <td>
                                    <span className="badge rounded-pill alert-danger">
                                        Được tạo lúc 13: 15 AM
                                    </span>
                                </td>
                                <td>Hôm nay lúc 10:13 AM</td>
                                <td className="d-flex justify-content-end align-item-center">
                                    <Link
                                        to={`/order`}
                                        className="text-success"
                                    >
                                        <i className="fas fa-eye"></i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
export default LatestOrder;
