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

// This function stops the getRequestObject with an alert test
if (window.addEventListener) {
    window.addEventListener("load", getRequestObject, false);
} 
else if (window.attachEvent) {
    window.attachEvent("onload", getRequestObject);
}

// This modifies the event listener to call the function as an event handler for the submit event
var form = document.getElementsByTagName("form")[0];
if (form.addEventListener){
    form.addEventListener("submit", stopSubmission, false);
    window.addEventListener("load", getRequestObject, false
     );
}
else if (form.attachEvent){
    form.attachEvent("onsubmit", stopSubmission);
    window.attachEvent("onload", getRequestObject);
}

// This function will  request a stock quote from the server 
function getQuote(){
    alert("getQuote()");
    if (document.getElementsByTagName("input")[0].value){
        entry = 
        document.getElementsByTagName("input")[0].value;
    }
    if (!httpRequest){
       httpRequest = getRequestObject();
    }  
}

// this will call the function 
function getQuote();

// load the event as an event handler
var form = document.getElementsByTagName("form")[0];
if (form.addEventListener){
    form.addEventListener("submit", stopSubmission, false);
    window.addEventListener("load", getQuote, false);
} 

else if (form.attachEvent){
    form.attachEvent("onsubmit", stopSubmission);
    window.attachEvent("onload", getQuote);
}

httpRequest.abort();
httpRequest.open("get", "StockCheck.php?t=" + entry, true);
httpRequest.send(null);

// Event handler: 
httpRequest.onreadystatechange = displayData; 

function displayData(){
    if (httpRequest.readyState === 4 && httpRequest.status === 200){
        var stockResults = httpRequest.responseText;
        (stockResults);
    }
    var stockItems = stockResults.split(/,|\"/);
    console.log(stockItems);

}

document.getElementById("ticker").innerHTML = stockItems.symbol; 
document.getElementById("openingPrice").innerHTML = stockItems.open;
document.getElementById("lastTrade").innerHTML = stockItems.latestPrice;
var date = new Date (stockItems.latestUpdate);
document.getElementById("lastTradeDT").innerHTML = date.toDateString() + "<br>" + date.toLocaleTimeString();
document.getElementById("change").innerHTML = (stockItems.open).toFixed(2);
(stockItems.latestPrice - stockItems.open).toFixed(2);
        document.getElementById("range").innerHTML = "Low  " + 
            (stockItems.low * 1).toFixed(2) + "<br>High " + 
            (stockItems.high * 1).toFixed(2);
        document.getElementById("volume").innerHTML = 
            (stockItems.latestVolume * 1).toLocaleString();