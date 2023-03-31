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
                                <div className="info">Size: {item.size}</div>
                            </Link>
                        </td>
                        <td>{item.price} VNĐ</td>
                        <td>{item.qty}</td>
                        <td className="text-end">
                            {item.qty * item.price} VNĐ
                        </td>
                    </tr>
                ))}

                <tr>
                    <td colSpan="4">
                        <article className="float-end">
                            <dl className="dlist">
                                <dt>Giá:</dt>
                                <dd>{order.itemsPrice} VNĐ</dd>
                            </dl>
                            <dl className="dlist">
                                <dt>Phí giao hàng</dt>
                                <dd>{order.shippingPrice} VNĐ</dd>
                            </dl>
                            <dl className="dlist">
                                <dt>Tổng giá:</dt>
                                <dd>
                                    <b className="h5">{order.totalPrice} VNĐ</b>
                                </dd>
                            </dl>
                            <dl className="dlist">
                                <dt className="text-muted">Trạng thái:</dt>
                                <dd>
                                    {order.isPaid ? (
                                        <span className="badge rounded-pill alert-success text-success">
                                            Đã thanh toán
                                        </span>
                                    ) : (
                                        <span className="badge rounded-pill alert-danger text-danger">
                                            Chưa thanh toán
                                        </span>
                                    )}
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
