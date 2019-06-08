const express = require('express');
const app = express();

const admin = require('firebase-admin');
const serviceAccount = require("../config/serviceAccountKey.json");

const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
app.use(bodyParser.json({ extended: true}));
app.use(cors());

// connect to firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gearheads-1529515255083.firebaseio.com"
});


app.get('/', (req, res) => {
    res.send('test');
});

app.listen(3000);
