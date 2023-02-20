import React from 'react';

const Orders = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            {/*
            <div className="col-12 alert alert-info text-center mt-3">
            Không có đơn hàng
            <Link className="btn btn-success mx-2 px-3 py-2" to="/" style={{ fontSize: "12px" }}>
            Bắt đầu mua sắm
            </Link>
            </div>

             */}

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
                        <tr className={'alert-success'}>
                            <td>
                                <a href={`/`} className="link"></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
