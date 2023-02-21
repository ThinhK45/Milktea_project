import React from 'react';

const ProductsStatistics = () => {
    return (
        <div className="col-xl-6 col-lg-12">
            <div className="card mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title">Thống kê sản phẩm</h5>
                    <iframe
                        style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
                        width="640"
                        height="480"
                        src="https://charts.mongodb.com/charts-milktea-project-oebkj/embed/charts?id=63f36af4-5123-4d97-87e6-7f4712e5d6a0&maxDataAge=3600&theme=light&autoRefresh=true"
                        title="img"
                        alt="img"
                    ></iframe>
                </article>
            </div>
        </div>
    );
};
export default ProductsStatistics;
