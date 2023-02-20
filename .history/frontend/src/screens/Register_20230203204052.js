import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { register } from './../Redux/Actions/userActions.js';
import Message from '../components/LoadingError/Error.js';
import Loading from '../components/LoadingError/Loading';

const Register = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [userInfo, history, redirect]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    };
    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <input type="text" placeholder="Tên tài khoản"  value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Email"  value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Mật khẩu" value={password}
                        onChange={(e) => setPassword(e.target.value)}//>
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
