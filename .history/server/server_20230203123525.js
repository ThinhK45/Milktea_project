import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';
import ImportData from './Dataimport.js';
dotenv.config();
import productRoute from './Router/ProductRoutes.js';
import { notFound, errorHandler } from './Middleware/Error.js';
import userRouter from './Router/UserRoutes.js';
connectDatabase();
const app = express();

// API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);
app.use('/api/users', userRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running http://localhost:${PORT}`));
