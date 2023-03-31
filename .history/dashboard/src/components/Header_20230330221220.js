import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Actions/userActions';

const Header = () => {
    const [keyword, setKeyword] = useState();
    const dispatch = useDispatch();

    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    };
    useEffect(() => {
        $('[data-trigger]').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass('show');
        });
        $('.btn-aside-minimize').on('click', function () {
            if (window.innerWidth < 768) {
                $('body').removeClass('aside-minimize');
                $('.navbar-aside').removeClass('show');
            } else {
                $('body').toggleClass('aside-mini');
            }
        });
    }, []);

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header className="main-header navbar">
            <div className="col-search">
                <form onSubmit={submitHandler} className="input-group">
                    <input
                        type="search"
                        className="form-control rounded search"
                        placeholder="Tìm kiếm"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        Tìm kiếm
                    </button>
                </form>
            </div>
            <div className="col-nav">
                <button
                    className="btn btn-icon btn-mobile me-auto"
                    data-trigger="#offcanvas_aside"
                >
                    <i className="md-28 fas fa-bars"></i>
                </button>
                <ul className="nav">
                    {/* <li className="nav-item">
                        <Link
                            className={`nav-link btn-icon`}
                            title="Dark mode"
                            to="#"
                        >
                            <i className="fas fa-moon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link btn-icon`} to="#">
                            <i className="fas fa-bell"></i>
                        </Link>
                    </li> */}
                    <li className="dropdown nav-item">
                        <Link
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            to="#"
                        >
                            <img
                                className="img-xs rounded-circle"
                                src="https://static.thenounproject.com/png/1543010-200.png"
                                alt="Admin"
                            />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                            {/* <Link className="dropdown-item" to="/">
                                Hồ sơ của tôi
                            </Link> */}
                            <Link className="dropdown-item" to="#">
                                Cài đặt
                            </Link>
                            <Link
                                onClick={logoutHandler}
                                className="dropdown-item text-danger"
                                to="#"
                            >
                                Thoát
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
