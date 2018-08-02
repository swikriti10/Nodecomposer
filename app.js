"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var http = require('http');
var request = require('request');
var session = require('express-session');
var csrfToken;
const AdminConnection = require('composer-admin').AdminConnection;
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const { BusinessNetworkDefinition, CertificateUtil, IdCard } = require('composer-common');

//declate namespace
const namespace = 'org.acme.product.auction';

//in-memory card store for testing so cards are not persisted to the file system
const cardStore = require('composer-common').NetworkCardStoreManager.getCardStore( { type: 'composer-wallet-inmemory' } );

//admin connection to the blockchain, used to deploy the business network
let adminConnection;

//this is the business network connection the tests will use.
let businessNetworkConnection;

let businessNetworkName = 'product-auction';
let factory;

var c;


const restService = express();

const App = require('actions-on-google').DialogflowApp;

//var d = '1140';
var i = 0;
var obj = [];
var botResponse = "";
restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());
//restService.use(session({ secret: 'ssshhhhh' }));
//var sess;


restService.get("/check", function (req, res) {
   var accountNumber ='testx@gmail.com';
    var cardId ='networkadmin';

    //print variables
    console.log('memberData using param - ' + ' accountNumber: ' + accountNumber + ' cardId: ' + cardId);

    //declare return object
    var returnData = {};
  
  
  
  
  
  
  
  
  
    var items =[{name:'swik',location:'Texas'},
                {name:'Tinku',location:'Texas'}
    ];
     res.send(items);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

});

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
