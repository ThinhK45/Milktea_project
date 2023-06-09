import express from 'express';
import asyncHandler from 'express-async-handler';
import { admin, protect } from '../Middleware/AuthMiddleware.js';
import Order from './../Models/OrderModel.js';

const orderRouter = express.Router();

// CREATE ORDER
orderRouter.post(
    '/',
    protect,
    asyncHandler(async (req, res) => {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice,
        } = req.body;

        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error('Không có sản phẩm trong đơn hàng');
            return;
        } else {
            const order = new Order({
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                shippingPrice,
                totalPrice,
            });

            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    })
);
// USER LOGIN ORDERS
orderRouter.get(
    '/',
    protect,
    asyncHandler(async (req, res) => {
        const order = await Order.find({ user: req.user._id }).sort({
            _id: -1,
        });
        res.json(order);
    })
);

// ADMIN GET ALL ORDERS
orderRouter.get(
    '/all',
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const orders = await Order.find({})
            .sort({
                _id: 'desc',
            })
            .then((latestCourse) => {
                req.body._id = latestCourse._id + 1;
            })
            .populate('user', 'id name email');
        res.json(orders);
    })
);

// GET ORDER BY ID
orderRouter.get(
    '/:id',
    protect,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id).populate(
            'user',
            'name email'
        );

        if (order) {
            res.json(order);
        } else {
            res.status(404);
            throw new Error('Không có đơn hàng');
        }
    })
);
// ORDER IS PAID
orderRouter.put(
    '/:id/pay',
    protect,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);

        if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address,
            };

            const updatedOrder = await order.save();
            res.json(updatedOrder);
        } else {
            res.status(404);
            throw new Error('Không có đơn hàng');
        }
    })
);
// ORDER IS PAID
orderRouter.put(
    '/:id/delivered',
    protect,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);

        if (order) {
            order.isDelivered = true;
            order.deliveredAt = Date.now();
            const updatedOrder = await order.save();
            res.json(updatedOrder);
        } else {
            res.status(404);
            throw new Error('Không có đơn hàng');
        }
    })
);
export default orderRouter;
