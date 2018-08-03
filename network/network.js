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

let businessNetworkDefinition;

let businessNetworkName = 'product-auction';

let factory;



/*

* Import card for an identity

* @param {String} cardName The card name to use for this identity

* @param {Object} identity The identity details

*/

async function importCardForIdentity(cardName, identity) {



//use admin connection

adminConnection = new AdminConnection();

businessNetworkName = 'product-auction';


//declare metadata

const metadata = {

userName: identity.userID,

version: 1,

enrollmentSecret: identity.userSecret,

businessNetwork: businessNetworkName

};


//get connectionProfile from json, create Idcard

const connectionProfile = require('./local_connection.json');

const card = new IdCard(metadata, connectionProfile);


//import card

await adminConnection.importCard(cardName, card);

}







/*

* Reconnect using a different identity

* @param {String} cardName The identity to use

*/

async function useIdentity(cardName) {



//disconnect existing connection

await businessNetworkConnection.disconnect();



//connect to network using cardName

businessNetworkConnection = new BusinessNetworkConnection();

await businessNetworkConnection.connect(cardName);

}





module.exports={



/*

* Get Member data

* @param {String} cardId Card id to connect to network

* @param {String} accountNumber Account number of member

*/

memberData: async function (cardId, accountNumber) {



try {

// let identity='5889e81ceec714b62e8a2e5612f7cddb93aefd6f5866adb93e0b371fbea41e90'

// await importCardForIdentity(cardId, identity);

//connect to network with cardId

businessNetworkConnection = new BusinessNetworkConnection();

await businessNetworkConnection.connect(cardId);

//.then((result)=>{

//businessNetworkDefinition=result;

//});

//console.log('bye');

//console.log(businessNetworkDefinition);

//console.log('bye');

//get member from the network

const memberRegistry = await businessNetworkConnection.getParticipantRegistry(namespace + '.Member');

const member = await memberRegistry.get(accountNumber);

console.log('hi');

console.log(member);

console.log('hi');

//disconnect

//await businessNetworkConnection.disconnect(cardId);



//return member object

return member;

}

catch(err) {

//print and return error

console.log(err);

var error = {};

error.error = err.message;

console.log(error);

return error;

}



}

}
