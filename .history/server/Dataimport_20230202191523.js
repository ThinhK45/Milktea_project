import express from 'express';
import User from './Models/UserModel';
import users from './data/users';
const ImportData = express.Router();

ImportData.post('/user', (req, res) => {
    User.Remove({});
    const importUser = User.insertMany(users);
    res.send({ importUser });
});

export default ImportData;
