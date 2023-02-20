import express from 'express';
import products from './data/Products.js';
const app = express();

// Tai san pham tu server
app.get('/api/products', (req, res) => {
    res.json(products);
});
app.get('/api/product', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
});

app.listen(5000, console.log('server running http://localhost:5000'));
