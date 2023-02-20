import express from 'express';
import asyncHandler from 'express-async-handler';
import protect from '../Middleware/AuthMiddleware.js';

const orderRouter = express.Router();

//
orderRouter.post(
    '/',
    asyncHandler(async (req, res) => {
        const { orderItems } = req.body;
    })
);
