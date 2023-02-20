import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    return (
        <div>
            {/* Top header*/}
            <div className="Announcement">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center display-none">
                            <p>+ 961666166</p>
                            <p>milktea@gmail.com</p>
                        </div>
                        <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                            <Link to="">
                                <i className="fab fa-facebook"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link to="">
                                <i className="fab fa-pinterest-p"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className="header">
                <div className="container">
                    {/* Mobile Header */}
                    <div className="mobile-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <Link className="navbar-brand" to="">
                                        <img
                                            alt="logo"
                                            src="/images/logo.png"
                                        />
                                    </Link>
                                </div>

                                <div className="col-6 d-flex align-items-center justify-content-end">

                                    {
                                        userInfo ? (
                                            <div className="btn-group">
                                        <button
                                            type="button"
                                            className="name-button dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fa fa-user"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link
                                                className="dropdown-item"
                                                to="/profile"
                                            >
                                                Hồ sơ
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                Đăng xuất
                                            </Link>
                                        </div>
                                    </div>

                                        )
            }


                                    <Link
                                        to="/cart"
                                        className="cart-mobile-icon"
                                    >
                                        <i className="fas fa-shopping-bag"></i>
                                        <span className="badge">
                                            {cartItems.length}
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-12 d-flex align-items-center">
                                    <form className="input-group">
                                        <input
                                            type="search"
                                            className="form-control rounded search"
                                            placeholder="Search"
                                        />
                                        <button
                                            type="submit"
                                            className="search-button"
                                        >
                                            Tìm kiếm
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PC Header */}
                    <div className="pc-header">
                        <div className="row">
                            <div className="col-md-3 col-4 d-flex align-items-center">
                                <Link className="navbar-brand" to="/">
                                    <img alt="logo" src="/images/logo.png" />
                                </Link>
                            </div>
                            <div className="col-md-6 col-8 d-flex align-items-center">
                                <form className="input-group">
                                    <input
                                        type="search"
                                        className="form-control rounded search"
                                        placeholder="Search"
                                    />
                                    <button
                                        type="submit"
                                        className="search-button"
                                    >
                                        Tìm kiếm
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="name-button dropdown-toggle"
                                        id="dropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Hi, Admin
                                    </button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <Link
                                            className="dropdown-item"
                                            to="/profile"
                                        >
                                            Hồ sơ
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            Đăng xuất
                                        </Link>
                                    </div>
                                </div>
                                <Link to="/cart">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">
                                        {cartItems.length}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
