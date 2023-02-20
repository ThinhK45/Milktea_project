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
                                    <img src="./images/user.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
