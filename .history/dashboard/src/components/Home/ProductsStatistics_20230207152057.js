import React from 'react';

const ProductsStatistics = () => {
    return (
        <div className="col-xl-6 col-lg-12">
            <div className="card mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title">Thống kê sản phẩm</h5>
                    <iframe
                        style={{ background: "#FFFFFF",border:" none",borderRadius: "2px";boxShadow:" 0 2px 10px 0 rgba(70, 76, 79, .2)", }}
                        width="640"
                        height="480"
                        src="https://charts.mongodb.com/charts-milktea-project-oebkj/embed/charts?id=63e20428-4888-4ef1-8c1a-eee56db2ed54&maxDataAge=3600&theme=light&autoRefresh=true"
                        alt="img"
                    ></iframe>
                </article>
            </div>
        </div>
    );
};
export default ProductsStatistics;
