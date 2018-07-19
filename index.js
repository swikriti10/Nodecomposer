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


restService.post("/wms", function (req, res) {
    var array =
     req.body.result &&
      req.body.result.parameters &&
      req.body.result.parameters.array
        ? req.body.result.parameters.array
       : "notselectedmenu";

    return res.json({
        speech: array,
        displayText: array,
        // speech: optionIntentname,
        // displayText: optionIntentname,
        source: "webhook-echo-sample"


    });


   

    



});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
