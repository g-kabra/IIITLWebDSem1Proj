//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { options } = require("request");

const app = express();

app.use(express.static("public2"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/login.html");
})

app.post("/", function(req, res){

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

   var data = {
       members: [
           {
               email_address: email,
               status: "subscribed",
               merge_fields: {
                   FNAME: firstName,
                   LNAME: lastName
               }
           }
       ]
   };

   var jsonData = JSON.stringify(data);

   const url ="https://us14.api.mailchimp.com/3.0/lists/0db4db805f";

   const options = {
       method: "POST",
       auth: "prateek:a33c9faae1ec1863cd7a49c0ab7c0c37-us14"
   }

   const request = https.request(url, options, function(response){

       if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
   });

   request.write(jsonData);
   request.end();

});


app.listen(3000, function(){
    console.log("server is running on port 3000");
});

//API KEY
//a33c9faae1ec1863cd7a49c0ab7c0c37-us14

//List ID
//0db4db805f