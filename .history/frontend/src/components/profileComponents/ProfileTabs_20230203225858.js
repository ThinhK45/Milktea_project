import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-toastify/dist/components';

const ProfileTabs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, user]);
    const submitHandler = (e) => {
        e.preventDefault();
        // password match
        if (password !== confirmPassword) {
            alert('Mật khẩu không trùng khớp');
        } else {
            // Update profile
            alert('Mật khẩu trùng khớp');
        }
    };
    return (
        <>
            <Toast />
            <form className="row form-container" onSubmit={submitHandler}>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-fn">Tên tài khoản</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-email">Địa chỉ email</label>
                        <input
                            className="form-control"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-pass">Mật khẩu mới</label>
                        <input
                            className="form-control"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-confirm-pass">
                            Nhập lại mật khẩu
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Cập nhật hồ sơ</button>
            </form>
        </>
    );
};
export default ProfileTabs;
