const express = require('express');
const app = express();
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
app.use(bodyParser.json({ extended: true}));
app.use(cors());

// connect to firebase

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(3000);
