import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../Models/UserModel.js';

const userRoute = express.Router();

// Login
userRoute.get(
    '/lgin',
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: user.token,
            });
        }
    })
);

export default userRoute;
