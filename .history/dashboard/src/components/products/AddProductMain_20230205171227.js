import React from 'react';
import { Link } from 'react-router-dom';

const AddProductMain = () => {
    return (
        <>
            <section className="content-main" style={{ maxWidth: '1200px' }}>
                <form>
                    <div className="content-header">
                        <Link
                            to="/products"
                            className="btn btn-danger text-white"
                        >
                            Đi đến sản phẩm
                        </Link>
                        <h2 className="content-title">Thêm sản phẩm</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Đăng ngay
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};
