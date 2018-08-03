'use strict';



//get libraries

const express = require('express');

const bodyParser = require('body-parser');

const request = require('request');

const path = require('path');



//create express web-app

const app = express();

const router = express.Router();

const AdminConnection = require('composer-admin').AdminConnection;

const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;

const { BusinessNetworkDefinition, CertificateUtil, IdCard } = require('composer-common');

//in-memory card store for testing so cards are not persisted to the file system

const cardStore = require('composer-common').NetworkCardStoreManager.getCardStore( { type: 'composer-wallet-inmemory' } );



//admin connection to the blockchain, used to deploy the business network

let adminConnection;

var namespace='org.acme.product.auction'







//get the libraries to call

var network = require('./network/network.js');





//bootstrap application settings









//post call to retrieve member data, transactions data and partners to perform transactions with from the network

app.get('/api/memberData', function(req, res) {



//declare variables to retrieve from request

var accountNumber ='testx@gmail.com';

//var cardId ='admin@product-auction';

var cardId ='testx@product-auction';


//await importCardForIdentity(cardId, identity);







//let businessNetworkConnection;

// businessNetworkConnection = new BusinessNetworkConnection();

// businessNetworkConnection.connect(cardId);

//print variables

console.log('memberData using param - ' + ' accountNumber: ' + accountNumber + ' cardId: ' + cardId);



//declare return object

var returnData = {};

network.memberData(cardId, accountNumber)

.then((member) => {

//return error if error in response

if (member.error != null) {

console.log(member.error);



res.json({

error: member.error

});

} else {

//else add member data to return object

returnData.email = member.email;

returnData.firstName = member.firstName;

returnData.lastName = member.lastName;

}

console.log('a');

console.log(returnData.email);

console.log('a');



})





//get member data from network

///////const memberRegistry = businessNetworkConnection.getParticipantRegistry(namespace + '.Member');

//const member = memberRegistry.get(accountNumber);

//returnData.email=member.email;

//returnData.firstName=member.firstName;



//return returnData

res.send(returnData);






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
