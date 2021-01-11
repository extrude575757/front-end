const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const app = express();
const data = require("./data");
const token = "ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98";

app.use(bodyParser.json());
// app.use(cors());
app.use(morgan('dev'));




// // Database
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// // app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));


// // Get the mysql service
// var mysql = require('mysql');

// // Add the credentials to access your database
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'RecipeDB'
// });

// // connect to mysql
// connection.connect(function(err) {
//     // in case of error
//     if(err){
//         console.log(err.code);
//         console.log(err.fatal);
//     }
// });

// // Perform a query
// $query = 'SELECT * from MyTable LIMIT 10';

// connection.query($query, function(err, rows, fields) {
//     if(err){
//         console.log("An error ocurred performing the query.");
//         return;
//     }

//     console.log("Query succesfully executed: ", rows);
// });

// // Close the connection
// connection.end(function(){
//     // The connection has been closed
// });









// Authentication

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "Greg" && password === "Dollars") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.post("/api/logout", (req, res) => {
  const { userToken } = req.body;
  if (t === token) {
    //remove token from db
  }
  
  res.status(200).json({
    payload: token
  });
});

app.get("/api/data", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
