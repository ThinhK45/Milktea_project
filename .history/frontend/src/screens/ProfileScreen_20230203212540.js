import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
// import ProfileTabs from './../components/profileComponents/ProfileTabs';
// import Orders from './../components/profileComponents/Orders';

const ProfileScreen = () => {
    window.scrollTo(0, 0);
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    return (
        <>
            <Header />
            <div className="container mt-lg-5 mt-3">
                <div className="row align-items-start">
                    <div className="col-lg-4 p-0 shadow">
                        <div className="author-card pb-0 pb-md-3">
                            <div className="author-card-cover"></div>
                            <div className="author-card-profile row">
                                <div className="author-card-avatar col-md-5">
                                    <img
                                        src="./images/user.jpg"
                                        alt="userprofileimage"
                                    />
                                </div>
                                <div className="author-card-details col-md-7">
                                    <h5 className="author-card-name mb-2">
                                        <strong>Admin</strong>
                                    </h5>
                                    <span className="author-card-position">
                                        Tham gia Dec 12 2022
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="wizard pt-3">
                            <div className="d-flex align-items-start">
                                <div
                                    className="nav align-items-start flex-column col-12 nav-pills me-3"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        className="nav-link active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        Cài đặt hồ sơ
                                    </button>
                                    <button
                                        className="nav-link d-flex justify-content-between"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile"
                                        type="button"
                                        tole="tab"
                                        aria-controls="v-pills-profile"
                                    >
                                        Danh sách đặt hàng
                                        <span className="badge2">
                                            {cartItems.length}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* panels */}
                    <div
                        className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
                        id="v-pills-tabContent"
                    >
                        <div
                            className="tab-pane fade "
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <div>
                                {' '}
                                <div className="Toastify"></div>
                                <div className="Toastify"></div>
                            </div>
                            <form className="form-container row">
                                <div className="col-md-6">
                                    <div className="form">
                                        <label for="account-fn">
                                            Tên tài khoản
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            required
                                            value=""
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form">
                                        <label for="account-email">
                                            E-mail
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            required
                                            value=""
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form">
                                        <label for="account-pass">
                                            Mật khẩu mới
                                        </label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            required
                                            value=""
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
                                            value=""
                                        />
                                    </div>
                                </div>
                                <button type="submit">Cập nhật hồ sơ</button>
                            </form>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="col-12 alert alert-info text-center mt-3">
                                    "Giỏ hàng trống"
                                    <a
                                        className="btn btn-success mx-2 px-3 py-2"
                                        href="/"
                                        style="font-size: 12px"
                                    >
                                        Bắt đầu mua
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileScreen;
