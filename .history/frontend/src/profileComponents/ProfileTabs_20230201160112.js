import React from 'react';

const ProfileTabs = () => {
    return (
        <form className="row form-container">
            <div className="col-md-6">
                <div className="form">
                    <label for="account-fn">Tên tài khoản</label>
                    <input className="form-control" type="text" required />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label for="account-email">Địa chỉ email</label>
                    <input className="form-control" type="email" required />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label for="account-email">Mật khẩu mới</label>
                    <input className="form-control" type="password" required />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label for="account-email">Nhập lại mật khẩu</label>
                    <input className="form-control" type="email" required />
                </div>
            </div>
        </form>
    );
};
