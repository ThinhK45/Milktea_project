import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetailProducts = (props) => {
    const { order, loading } = props;

    if (!loading) {
        const addDecimals = (num) => {
            return Math.round(num * 100) / 100;
        };
        order.itemsPrice = addDecimals(
            order.orderItems.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            )
        );
    }
    return (
        <table className="table border table-lg">
            <thead>
                <tr>
                    <th style={{ width: '40%' }}>Sản phẩm</th>
                    <th style={{ width: '20%' }}>Đơn giá</th>
                    <th style={{ width: '20%' }}>Số lượng</th>
                    <th style={{ width: '20%' }} className="text-end">
                        Tổng
                    </th>
                </tr>
            </thead>
            <tbody>
                {order.orderItems.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <Link className="itemside" to="#">
                                <div className="left">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                        }}
                                        className="img-xs"
                                    />
                                </div>
                                <div className="info">{item.name}</div>
                            </Link>
                        </td>
                        <td>5899 VNĐ</td>
                        <td>3</td>
                        <td className="text-end">25555 VNĐ</td>
                    </tr>
                ))}

                <tr>
                    <td colSpan="4">
                        <article className="float-end">
                            <dl className="dlist">
                                <dt>Giá:</dt>
                                <dd>35 VNĐ</dd>
                            </dl>
                            <dl className="dlist">
                                <dt>Phí giao hàng:</dt>
                                <dd>3533 VNĐ</dd>
                            </dl>
                            <dl className="dlist">
                                <dt>Tổng giá:</dt>
                                <dd>
                                    <b className="h5">3511 VNĐ</b>
                                </dd>
                            </dl>
                            <dl className="dlist">
                                <dt className="text-muted">Trạng thái:</dt>
                                <dd>
                                    <span className="badge rounded-pill alert-success text-success">
                                        Thanh toán được thực hiện
                                    </span>
                                </dd>
                            </dl>
                        </article>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
export default OrderDetailProducts;
