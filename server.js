
var express = require("express");
var app = express();

app.get('/users', function userIndex(req, res) {
  // User.find({}, function(err, users){
  //   console.log("There are", users.length, "users")
  // })

  res.send("<h1>SANTITY CHECK!!!</h1>");

});

app.listen(3000);