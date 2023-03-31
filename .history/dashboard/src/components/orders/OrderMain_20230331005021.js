import React, { useState } from 'react';
// import Orders from './Orders.js';
import { useSelector } from 'react-redux';
import Loading from './../LoadingError/Loading';
import Message from './../LoadingError/Error';
import { Link } from 'react-router-dom';
import moment from 'moment';

const OrderMain = () => {
    const [search, setSearch] = useState('');

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Đơn hàng</h2>
            </div>

            <div className="card mb-4 shadow-sm">
                <header className="card-header bg-white">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input
                                type="text"
                                className="form-control p-2"
                                placeholder="Tìm kiếm..."
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        {/* <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Trạng thái</option>
                                <option>Hiển thị</option>
                                <option>Ẩn</option>
                                <option>Hiển thị tất cả</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Hiển thị 20</option>
                                <option>Hiển thị 30</option>
                                <option>Hiển thị 40</option>
                            </select>
                        </div> */}
                    </div>
                </header>
                <div className="card-body">
                    <div className="table-responsive">
                        {loading ? (
                            <Loading />
                        ) : error ? (
                            <Message variant="alert-danger">{error}</Message>
                        ) : (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã đơn hàng</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Tổng</th>
                                        <th scope="col">Thanh toán</th>
                                        <th scope="col">Ngày</th>
                                        <th>Trạng thái</th>
                                        <th scope="col" className="text-end">
                                            Hành động
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders
                                        .filter((order) => {
                                            return search.toLowerCase() === ''
                                                ? order
                                                : order._id
                                                      .toLowerCase()
                                                      .includes(search) ||
                                                      order.name
                                                          .toLowerCase()
                                                          .includes(search);
                                        })
                                        .map((order) =>
                                            order.user ? (
                                                <tr key={order._id}>
                                                    <td>{order._id}</td>

                                                    <td>
                                                        <b>{order.user.name}</b>
                                                    </td>
                                                    <td>{order.user.email}</td>
                                                    <td>
                                                        {order.totalPrice} VNĐ
                                                    </td>
                                                    <td>
                                                        {order.isPaid ? (
                                                            <span className="badge rounded-pill alert-success">
                                                                Thanh toán vào{' '}
                                                                {moment(
                                                                    order.paidAt
                                                                ).format(
                                                                    'MMM Do YY'
                                                                )}
                                                            </span>
                                                        ) : (
                                                            <span className="badge rounded-pill alert-danger">
                                                                Chưa thanh toán
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {moment(
                                                            order.createdAt
                                                        ).format('MMM Do YY')}
                                                    </td>
                                                    <td>
                                                        {order.isDelivered ? (
                                                            <span className="badge btn-success">
                                                                Đã giao hàng
                                                            </span>
                                                        ) : (
                                                            <span className="badge btn-dark">
                                                                Chưa giao hàng
                                                            </span>
                                                        )}
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

                                    {/* <tr>
                    <td>
                        <b>Trà sữa khoai môn</b>
                    </td>
                    <td>thinh@gmail.com</td>
                    <td>45688 VNĐ</td>
                    <td>
                        <span className="badge rounded-pill alert-success">
                            Chưa thanh toán
                        </span>
                    </td>
                    <td>Dec 12 2022</td>
                    <td>
                        <span className="badge btn-dark">Chưa thanh toán</span>
                    </td>
                    <td className="d-flex justify-content-end align-item-center">
                        <Link to={`/order`} className="text-success">
                            <i className="fas fa-eye"></i>
                        </Link>
                    </td>
                </tr> */}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OrderMain;
