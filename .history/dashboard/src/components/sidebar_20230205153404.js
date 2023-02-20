import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className="aside-top">
                    <Link to="/" className="brand-wrap">
                        <img
                            src="/images/logo.png"
                            style={{ height: '46' }}
                            className="logo"
                            alt="mẫu bảng điều khiển milktea"
                        />
                    </Link>
                    <div>
                        <button className="btn btn-icon btn-aside-minimize">
                            <i className="text-muted fas fa-stream"></i>
                        </button>
                    </div>
                </div>
                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/"
                                exact={true}
                            >
                                <i className="icon fas fa-home"></i>
                                <span className="text">Bảng điều khiển</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/products"
                                exact={true}
                            >
                                <i className="icon fas fa-shopping-bag"></i>
                                <span className="text">Sản phẩm</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};
