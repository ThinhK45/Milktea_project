import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetailProducts = () => {
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
                <tr>
                    <td>
                        <Link className="itemside" to="#">
                            <div className="left">
                                <img
                                    src="/images/3.png"
                                    alt="product"
                                    style={{ width: '40px', height: '40px' }}
                                    className="img-xs"
                                />
                            </div>
                            <div className="info">Trà sữa đào</div>
                        </Link>
                    </td>
                    <td>5899 VNĐ</td>
                    <td>3</td>
                    <td className="text-end">25555 VNĐ</td>
                </tr>
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
