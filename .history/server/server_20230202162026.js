import express from 'express';
const app = express();

// Tai san pham tu server
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(5000, console.log('server running http://localhost:5000'));
