const fs = require("fs"); // fs - file system
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});
app.get("/", function (req, res) {
  res.send(
    '<form method="POST" action="/store-user"><label for="username">Username:</label><input type="text" id="username" name="username"><button type="submit">Submit</button></form>'
  );
});
app.post("/store-user", function (req, res) {
  const username = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(username);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!<h1>");
});
app.get('/users', function (req,res){
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
   
  let  responseData = '<ul>';

  for(const user of existingUsers){
    responseData +=  '<li>'+ user  +'</li>';
  }
  responseData += '</ul>';
  res.send(responseData)
})

app.listen(3000);
