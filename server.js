'use strict';

const express = require('express');
const app = express();


const PORT = process.env.PORT || 5002;

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World!');
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));