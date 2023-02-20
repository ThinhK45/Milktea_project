import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../Models/ProductModel.js';

const productRoute = express.Router();

// GET ALL PRODUCTS
productRoute.get(
    '/',
    asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })
);

// GET PRODUCT
productRoute.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error('Sản phẩm không tồn tại');
        }
    })
);

// PRODUCT REVIEW
productRoute.post(
    '/:id/review',
    asyncHandler(async (req, res) => {
        const { rating, comment } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            );
            if (alreadyReviewed) {
                res.status(400);
                throw new Error('Sản phẩm đã được đánh giá');
            }
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user._id,
            };

            product.reviews.push(review);
            product.numReviews = product.reviews.length;
            product.rating =
                product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                product.reviews.length;
        } else {
            res.status(404);
            throw new Error('Sản phẩm không tồn tại');
        }
    })
);

export default productRoute;
