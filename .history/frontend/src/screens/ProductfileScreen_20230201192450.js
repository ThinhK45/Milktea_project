import React from 'react';
import Header from './../components/Header';
import ProfileTabs from './../components/profileComponents/ProfileTabs';
import Orders from './../components/profileComponents/Orders';

const ProfileScreen = () => {
    window.scrollTo(0, 0);
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
                                        src="./images/user.png"
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
                                        aria-aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        Cài đặt hồ sơ
                                    </button>
                                    <button
                                        class="nav-link d-flex justify-content-between"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile"
                                        type="button"
                                        tole="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        Danh ách đặt hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
