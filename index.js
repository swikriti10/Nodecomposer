
"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var http = require('http');
var request = require('request');
var request1 = require('request');
var request2 = require('request');
var c3;
var botResponse;
var botResponse1;
var result;
var entity;
var a;
var a1;
var c;
var c1;
var entity1;
var obj = [];
var entity2 = {};
const restService = express();

const App = require('actions-on-google').DialogflowApp;

var app = express();
//var url = "http://208.85.249.174:8000/sap/opu/odata/CRVWM/WMS_SRV";
var url1 = "http://208.85.249.174:8000/sap/opu/odata/sap/ZWMS_BOT_SRV/";
//ar url1 = "http://208.85.249.174:8000/sap/opu/odata/sap/ZWMS_BOT_SRV/";
var url = "http://208.85.249.174:8000/sap/opu/odata/CRVWM/WMS_SRV";


var d = 4500001002;
var i = 0;
var obj = [];
restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());


app.get('/test', function (req, res) {


    var array =
     req.body.result &&
      req.body.result.parameters &&
      req.body.result.parameters.array
        ? req.body.result.parameters.array
       : "noarray";

    return res.json({
        speech: array,
        displayText: array,
        // speech: optionIntentname,
        // displayText: optionIntentname,
        source: "webhook-echo-sample",
        

    });
    


  

   




})


app.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});

