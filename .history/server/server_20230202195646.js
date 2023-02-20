import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';
import ImportData from './Dataimport.js';
dotenv.config();
connectDatabase();
const app = express();

// API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running http://localhost:${PORT}`));
