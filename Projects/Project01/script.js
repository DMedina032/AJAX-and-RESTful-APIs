/*  Project 01_11_02

    Author: Dajah Medina
    Date:   9-18-19 

    Filename: script.js
*/

"use strict";
// global varibles
var httpRequest = false;
var entry = "^IXIC";

try {
    httpRequest = new XMLHttpRequest();
}
catch (requestError) {
    return false;
}
alert(httpRequest);
return httpRequest;


if (window.addEventListener) {
    window.addEventListener("load", getRequestObject, false);
} 
else if (window.attachEvent) {
    window.attachEvent("onload", getRequestObject);
}