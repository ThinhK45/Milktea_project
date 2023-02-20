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
                </div>
            </aside>
        </div>
    );
};
