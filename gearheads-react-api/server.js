const express = require('express');
const app = express();

const admin = require('firebase-admin');
const serviceAccount = require("../config/serviceAccountKey.json");

const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

// middleware
app.use(bodyParser.json({ extended: true}));
app.use(cors());

// connect to firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gearheads-1529515255083.firebaseio.com"
});

const db = admin.firestore();

// test database connection
const data = {
    value: 'test'
};

const setDoc = db.collection('test').doc('test1').set(data);

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
