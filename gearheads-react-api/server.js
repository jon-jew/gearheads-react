import * as admin from 'firebase-admin';
import firebaseAuth from "firebase-auth";
import functions from "firebase-functions";

import express from 'express';
const app = express();

import serviceAccount from "../config/serviceKey.js/index.js";

import bodyParser from 'body-parser';
import cors from 'cors';

const port = 3000;

var firebaseConfig = {
    apiKey: "AIzaSyDsizKaXLvrs8OaSYiAH7_XeAaswr8Ttzc",
    authDomain: "gearheads-54e35.firebaseapp.com",
    databaseURL: "https://gearheads-54e35.firebaseio.com",
    projectId: "gearheads-54e35",
    storageBucket: "gearheads-54e35.appspot.com",
    messagingSenderId: "318717218085",
    appId: "1:318717218085:web:817968dc2375f7087a1ecc",
    measurementId: "G-40QKBL6S2X"
};
// Initialize Firebase
admin.initializeApp(firebaseConfig);
//firebaseAdmin.analytics();

// middleware
app.use(bodyParser.json({ extended: true}));
app.use(cors());

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
