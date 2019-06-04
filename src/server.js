const express = require('express');
const app = express();
const admin = require('firebase-admin');

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(3000);
