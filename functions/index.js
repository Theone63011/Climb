const functions = require('firebase-functions');
const express = require('express');
//const firebase = require('firebase');


const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


 app.get('/profile', (request, res) => {
	res.sendFile('/public/profile.html', { "root" : __dirname});
 });

exports.profile = functions.https.onRequest(app);



  // Get a reference to the database service
  //var database = firebase.database();