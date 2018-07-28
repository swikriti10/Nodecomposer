"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var http = require('http');
var request = require('request');
var session = require('express-session');
var csrfToken;


var c;


const restService = express();

const App = require('actions-on-google').DialogflowApp;
var slack_message;


var url = "http://208.85.249.174:8000/sap/opu/odata/CRVWM/WMS_SRV/";
var url1 = "https://wiprowms30june-b94b9a0ad.dispatcher.us1.hana.ondemand.com/WMS900/sap/opu/odata/CRVWM/WMS_SRV/";

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
    var items =[{name:'swik',location:'Texas'},
                {name:'Tinku',location:'Texas'}
    ];
     res.send(items);

});

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
