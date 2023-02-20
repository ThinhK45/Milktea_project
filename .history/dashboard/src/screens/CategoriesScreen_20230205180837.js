import React from 'react';
import Sidebar from './../components/sidebar.js';
import Header from './../components/Header.js';
import MainCategories from './../components/Categories/MainCategories.js';

const CategoriesScreen = () => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <MainCategories />
            </main>
        </>
    );
};

export default CategoriesScreen;
