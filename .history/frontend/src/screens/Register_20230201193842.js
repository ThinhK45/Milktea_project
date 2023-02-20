import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const Register = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form className="Login col-md-8 col-lg-4 col-11">
                    <input type="text" placeholder="Tài khoản" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mật khẩu" />
                    <button type="submit">Đăng ký </button>
                    <p>
                        <Link to={'/login'}>
                            Tôi có tài khoản <strong>Login</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};.
export default Register;