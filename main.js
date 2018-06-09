
var crawler = require("./crawler");
var googleAPI = require("./googleAPI");
var googleNews = require("./googleNews");

var domain = "";
domain = getDomain(); // validate and process the email to retrieve the domain

//------------------------------

crawler(domain);
googleAPI(domain);
googleNews(domain);

//------------------------------

function getDomain() {
  var email = process.argv[2];

  if (email == undefined) {
    console.log("No email address supplied");
    process.exit(1);
  }

  if (!validateEmail(email)) {
    console.log("A valid email address not supplied");
    process.exit(1);
  }
  return email.split('@')[1];
}


function validateEmail(email) {
  var regex = /[^\s]+\@[^\s]+\.[^\s]+/; // very basic regex
  return regex.test(String(email).toLowerCase()); // emails not case specific
}


