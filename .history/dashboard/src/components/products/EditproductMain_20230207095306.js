import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const EditProductMain = (props) => {
    const { productId } = props;
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const productEdit = useSelector((state) => state.productEdit);
    const { loading, error, product } = productEdit;

    useEffect(() => {
        if (!product.name || product._id !== productId) {
            dispatch(editProduct(productId));
        } else {
            setName(product.name);
            setDescription(product.description);
            setCountInStock(product.countInStock);
            setImage(product.image);
            setPrice(product.price);
        }
    }, [product, dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            productEdit(
                name,
                price,
                description,
                image,
                countInStock,
                productId
            )
        );
    };

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
                        <h2 className="content-title">Cập nhật sản phẩm</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Đăng ngay
                            </button>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="product_title"
                                            className="form-label"
                                        >
                                            Tên sản phẩm
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập ở đây"
                                            id="product_title"
                                            required
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="product_price"
                                            className="form-label"
                                        >
                                            Giá
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Nhập ở đây"
                                            className="form-control"
                                            id="product_price"
                                            required
                                            value={price}
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="product_price"
                                            className="form-label"
                                        >
                                            Số lượng hàng còn
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Nhập ở đây"
                                            className="form-control"
                                            id="product_price"
                                            required
                                            // value={countInStock}
                                            // onChange={(e) =>
                                            //     setCountInStock(e.target.value)
                                            // }
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">
                                            Mô tả
                                        </label>
                                        <textarea
                                            placeholder="Nhập ở đây"
                                            className="form-control"
                                            rows="7"
                                            required
                                            // value={description}
                                            // onChange={(e) =>
                                            //     setDescription(e.target.value)
                                            // }
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">
                                            Hình ảnh
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Nhập đường dẫn hình"
                                            required
                                            // value={image}
                                            // onChange={(e) =>
                                            //     setImage(e.target.value)
                                            // }
                                        />
                                        <input
                                            className="form-control mt-3"
                                            type="file"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default EditProductMain;
