import React from 'react';
import { Link } from 'react-router-dom';

const Orders = (props) => {
    const { orders } = props;

    return (
        <table className="table">
            <thead>
                <tr>
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
                {orders.map((order) => (
                    <tr>
                        <td>
                            <b>Trà sữa mật ong</b>
                        </td>
                        <td>admin@gmail.com</td>
                        <td>456 VNĐ</td>
                        <td>
                            <span className="badge rounded-pill alert-success">
                                Thanh toán vào 23:20 AM
                            </span>
                        </td>
                        <td>Dec 12 2022</td>
                        <td>
                            <span className="badge btn-success">
                                Đã giao hàng
                            </span>
                        </td>
                        <td className="d-flex justify-content-end align-item-center">
                            <Link to={`/order`} className="text-success">
                                <i className="fas fa-eye"></i>
                            </Link>
                        </td>
                    </tr>
                ))}

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
    );
};

export default Orders;
