'use strict';

//get libraries
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

//create express web-app
const app = express();
const router = express.Router();

//get the libraries to call
//var network = require('./network/network.js');


//bootstrap application settings




//post call to retrieve member data, transactions data and partners to perform transactions with from the network
app.post('/api/memberData', function(req, res) {

  //declare variables to retrieve from request
  var accountNumber = req.body.accountnumber;
  var cardId = req.body.cardid;

  //print variables
  console.log('memberData using param - ' + ' accountNumber: ' + accountNumber + ' cardId: ' + cardId);

  //declare return object
  var returnData = {};
  
  //network.useIdentity(cardId);

  //get member data from network
returnData.email = member.email;
        returnData.firstName ='x';
        returnData.lastName ='y';
        returnData.balance ='0';
    

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
