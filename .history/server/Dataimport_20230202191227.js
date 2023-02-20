import express from 'express';

const ImportData = express.Router();

ImportData.post('/user', (req, res) => {
    await User.Remove({})
})
