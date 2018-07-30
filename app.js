'use strict';

//get libraries
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path')

//create express web-app
const app = express();
const router = express.Router();

//get the libraries to call
var network = require('./network/network.js');


//bootstrap application settings
app.use(express.static('./public'));
app.use('/scripts', express.static(path.join(__dirname, '/public/scripts')));
app.use(bodyParser.json());

//get home page
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

//get member page
app.get('/member', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/member.html'));
});

//get member registration page
app.get('/registerMember', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/registerMember.html'));
});

//get partner page
app.get('/partner', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/partner.html'));
});

//get partner registration page
app.get('/registerPartner', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/registerPartner.html'));
});

//get about page
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});




//post call to retrieve member data, transactions data and partners to perform transactions with from the network
app.post('/api/memberData', function(req, res) {

  //declare variables to retrieve from request
  var accountNumber = req.body.accountnumber;
  var cardId = req.body.cardid;

  //print variables
  console.log('memberData using param - ' + ' accountNumber: ' + accountNumber + ' cardId: ' + cardId);

  //declare return object
  var returnData = {};

  //get member data from network
  network.memberData(cardId, accountNumber)
    .then((member) => {
      //return error if error in response
      if (member.error != null) {
        res.json({
          error: member.error
        });
      } else {
        //else add member data to return object
        returnData.accountNumber = member.accountNumber;
        returnData.firstName = member.firstName;
        returnData.lastName = member.lastName;
        returnData.phoneNumber = member.phoneNumber;
        returnData.email = member.email;
        returnData.points = member.points;
      }

    })
    

                //return returnData
                res.json(returnData);

              

});


//declare port
var port = process.env.PORT || 8000;
if (process.env.VCAP_APPLICATION) {
  port = process.env.PORT;
}

//run app on port
app.listen(port, function() {
  console.log('app running on port: %d', port);
});
