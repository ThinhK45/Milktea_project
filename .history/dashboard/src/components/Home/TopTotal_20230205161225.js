import React from 'react';

const TopTotal = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-primary">
                            <i className="text-primary fas fa-usd-circle"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng doanh thu</h6>
                            <span>25000 VNĐ</span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-success">
                            <i className="text-primary fas fa-bags-shopping"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng đơn hàng</h6>
                            <span>25</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};
