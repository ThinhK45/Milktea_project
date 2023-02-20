import express from 'express';
import User from './Models/UserModel.js';
import Product from './Models/ProductModel.js';
import users from './data/users.js';

const ImportData = express.Router();

ImportData.post('/user', async (req, res) => {
    await User.deleteOne({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
});
ImportData.post('/products', async (req, res) => {
    await Product.deleteOne({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
});
export default ImportData;
