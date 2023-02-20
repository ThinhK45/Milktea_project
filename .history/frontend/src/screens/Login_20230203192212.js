import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [userInfo, history, redirect]);
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="mb-3">
                        Đăng nhập
                    </button>
                    <p>
                        <Link
                            to={
                                redirect
                                    ? `/register?redirect=${redirect}`
                                    : '/register</p>'
                            }
                        >
                            Tạo tài khoản
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};
export default Login;
