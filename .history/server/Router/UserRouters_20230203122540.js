import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../Models/ProductModel.js';

const userRoute = express.Router();

// GET ALL PRODUCTS
userRoute.get(
    '/',
    asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })
);

// GET PRODUCT
userRoute.get(
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

export default userRoute;
