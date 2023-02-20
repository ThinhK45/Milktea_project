import React from 'react';
import Sidebar from './../components/sidebar.jsx';
import Header from './../components/Header.js';
import UserComponent from './../components/users/UserComponent.js';

const UserScreen = () => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <UserComponent />
            </main>
        </>
    );
};

export default UserScreen;
