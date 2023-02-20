import express from 'express';
import asyncHandler from 'express-async-handler';
import protect from '../Middleware/AuthMiddleware.js';

const orderRouter = express.Router();

//
orderRouter.post(
    '/',
    protect,
    asyncHandler(async (req, res) => {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shipppingPrice,
            totalPrice,
        } = req.body;

        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error('Không có sản phẩm trong đơn hàng');
            return;
        } else {
            const order = new Order({
                orderItems,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                shipppingPrice,
                totalPrice,
            });

            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    })
);

export default orderRouter;
