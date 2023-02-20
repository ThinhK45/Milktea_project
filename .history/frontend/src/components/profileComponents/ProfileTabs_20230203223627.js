import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProfileTabs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

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
                    <label for="account-pass">Mật khẩu mới</label>
                    <input className="form-control" type="password" required />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label for="account-confirm-pass">Nhập lại mật khẩu</label>
                    <input className="form-control" type="password" required />
                </div>
            </div>
            <button type="submit">Cập nhật hồ sơ</button>
        </form>
    );
};
export default ProfileTabs;
