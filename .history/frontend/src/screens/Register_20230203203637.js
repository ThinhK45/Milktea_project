import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../Redux/Actions/userActions.js';
import Message from '../components/LoadingError/Error.js';
import Loading from '../components/LoadingError/Loading';

const Register = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [name, setEmail] = useState('');
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
        dispatch(login(email, password));
    };
    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form className="Login col-md-8 col-lg-4 col-11">
                    <input type="text" placeholder="Tài khoản" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mật khẩu" />
                    <button type="submit" className="mb-3">
                        Đăng ký{' '}
                    </button>
                    <p>
                        <Link to={'/login'}>
                            Tôi đã có tài khoản, <strong>Đăng nhập</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};
export default Register;
