const express = require('express');
const app = express.Router();

app.get('/', async (req, res) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).send('No token, authorization denied');
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        res.json({ msg: 'Protected data' });
    } catch (error) {
        res.status(401).send('Token is not valid');
    }
});

module.exports = app;