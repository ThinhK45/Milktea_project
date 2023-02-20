import React from 'react';
import Header from '../components/Header.js';
import Main from '../components/Home/Main.js';
import Sidebar from './../components/sidebar.js';

const HomeScreen = () => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <Main />
            </main>
        </>
    );
};
export default HomeScreen;
