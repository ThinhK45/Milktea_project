import React, { useEffect } from 'react';
import Header from './../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Actions/cartActions.js';
import { removeFromCart } from '../Redux/Actions/cartActions.js';

const CartScreen = ({ match, location, history }) => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const productId = match.params.id;
    const qty = location.search
        ? Number(location.search.split('qty=')[1].split('&')[0])
        : 1;
    const size = location.search
        ? Number(location.search.split('qty=')[1].split('&')[1].split('=')[1])
        : 1;
    // const size = location.search ? Number(location.search.split('=')[1]) : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    // const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(0);
    const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0);

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty, size));
        }
    }, [dispatch, productId, qty, size]);
    const checkOutHandler = () => {
        history.push('/login?redirect=shipping');
    };
    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <Header />

            {/*Cart */}
            <div className="container">
                {cartItems.length === 0 ? (
                    <div className="alert alert-info text-center mt-3">
                        {' '}
                        Giỏ hàng trống
                        <Link
                            className="btn btn-success mx-5 px-5 py-3"
                            to="/"
                            style={{ fontSize: '12px' }}
                        >
                            {' '}
                            Mua ngay
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="alert alert-info text-center mt-3">
                            Giá trị sản phẩm trong giỏ
                            <Link className="text-success mx-2" to="/cart">
                                ({cartItems.length})
                            </Link>
                        </div>
                        {/* cartItem */}

                        {cartItems.map((item, key) => (
                            <div key={key} className="cart-iterm row">
                                <div
                                    onClick={() =>
                                        removeFromCartHandle(item.product)
                                    }
                                    className="remove-button d-flex justify-content-center align-items-center"
                                >
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="cart-image col-md-3">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-text col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center mb-3">
                                    <h6 className="mb-2">Tên sản phẩm</h6>
                                    <Link to={`/products/${item.product}`}>
                                        <h4>{item.name}</h4>
                                    </Link>
                                </div>
                                <div className="cart-text col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center mb-3">
                                    <h6>Kích cỡ</h6>
                                    <div>{item.size === 1 ? 'Lớn' : 'Vừa'}</div>
                                </div>
                                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                                    <h6>Số lượng</h6>
                                    <select
                                        value={item.qty}
                                        onChange={(e) =>
                                            dispatch(
                                                addToCart(
                                                    item.product,
                                                    Number(e.target.value)
                                                )
                                            )
                                        }
                                    >
                                        {[
                                            ...Array(item.countInStock).keys(),
                                        ].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-item-md-end align-items-start d-flex flex-column justify-content-center col-sm-7">
                                    <h6>Giá</h6>
                                    <h4>{item.price} VNĐ</h4>
                                </div>
                            </div>
                        ))}

                        {/* End of cart iterms */}

                        <div className="total">
                            <span className="sub">Tổng: </span>
                            <span className="total-price">{total} VNĐ</span>
                        </div>
                        <hr />
                        <div className="cart-buttons d-flex align-items-center row">
                            <Link to="/" className="col-md-6">
                                <button>Tiếp tục mua</button>
                            </Link>
                            {total > 0 && (
                                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                                    <button onClick={checkOutHandler}>
                                        Thanh toán
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default CartScreen;
