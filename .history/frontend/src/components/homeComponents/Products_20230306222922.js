<div className="container">
    <h4>Các sản phẩm liên quan</h4>
    <div className="shopcontainer row">
        <div className="wrapper">
            {loading ? (
                <div className="mb-3">
                    <Loading />
                </div>
            ) : error ? (
                <Message variant="alert-danger">{error}</Message>
            ) : (
                <>
                    {products.map((product) => (
                        <div
                            className="shop col-lg-4 col-md-6 col-sm-6 box"
                            key={product._id}
                        >
                            <div className="border-product">
                                <Link to={`/products/${product._id}`}>
                                    <div className="shopBack">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />{' '}
                                    </div>
                                </Link>
                                <div className="shoptext">
                                    <p>
                                        <Link to={`/products/${product._id}`}>
                                            {product.name}
                                        </Link>
                                    </p>

                                    <p className="text-dark">
                                        <Rating
                                            value={product.rating}
                                            text={` ${product.numReviews}  đánh giá`}
                                        />{' '}
                                    </p>
                                    <h3>Giá: {product.price} VNĐ</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    </div>
</div>;
