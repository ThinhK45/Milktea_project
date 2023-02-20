import React from 'react';

const CreateCategory = () => {
    return (
        <div className="col-md-12 col-lg-4">
            <form>
                <div className="mb-4">
                    <label htmlFor="product_name" className="form-label">
                        Tên
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập ở đây"
                        className="form-control py-3"
                        id="product_name"
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label">Hình ảnh</label>
                    <input className="form-control" type="file" />
                </div>
                <div className="mb-4">
                    <label className="form-label">Mô tả</label>
                    <input className="form-control" type="text" />
                </div>
            </form>
        </div>
    );
};
