import React from 'react';
import { Link } from 'react-router-dom';

const LatestOrder = () => {
    return (
        <div className="card-body">
            <h5 className="card-title">Đơn hàng mới</h5>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
