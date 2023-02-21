import React from 'react';

const ProductsStatistics = () => {
    return (
        <div className="col-xl-6 col-lg-12">
            <div className="card mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title">Thống kê sản phẩm</h5>
                    <iframe
                        style={{
                            background: '#FFFFFF',
                            border: ' none',
                            borderRadius: '2px',
                            boxShadow: ' 0 2px 10px 0 rgba(70, 76, 79, .2)',
                            width: '100%',
                            height: '350px',
                        }}
                        src="https://charts.mongodb.com/charts-milktea-project-oebkj/embed/charts?id=63f36af4-5123-4d97-87e6-7f4712e5d6a0&maxDataAge=3600&theme=light&autoRefresh=true"
                        alt="img"
                        title="img"
                    ></iframe>
                </article>
            </div>
        </div>
    );
};
export default ProductsStatistics;
