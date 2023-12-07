'use strict';

const express = require('express');
const app = express();


const PORT = process.env.PORT || 5002;

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World! This is a cloud server. ');
});

app.get('/hello', (req, res, next) => {
    res.status(200).send('Hello Everyone! The cloud server is launched and should be working!');
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));