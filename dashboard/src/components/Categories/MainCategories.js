import React from 'react';
import CreateCategory from './CreateCategory.js';
import CategoriesTable from './CategoriesTable.js';

const MainCategories = () => {
    return (
        <section className="content-main">
            <div className="container-header">
                <h2 className="content-title">Loại sản phẩm</h2>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <CreateCategory />
                        <CategoriesTable />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainCategories;
