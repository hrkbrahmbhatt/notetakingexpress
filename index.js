const express = require("express");
const https = require("https");
const path = require("path");
const routes = require("./routes/index");
const api = require("./controllers/api/index");
var app = express();
const mysql = require('mysql');


// Add the credentials to access your database
var connection = mysql.createConnection({
  host: 'hiring.cyvxdrx2iv4i.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'hiring',
  password: 'notetakingexpress'
});

// // connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
    else{
      console.log('Connected!');
    }
   
});

// Perform a query
$query = `SELECT o.orderDate, o.comments, c.salesRepEmployeeNumber FROM
classicmodels.orders o INNER JOIN classicmodels.customers c
WHERE o.customerNumber = c.customerNumber &&
c.salesRepEmployeeNumber = "1165" ORDER BY o.orderDate DESC
limit 0,3;`;

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});

// Close the connection
connection.end(function(){
    // The connection has been closed
});


//all environment
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
app.set("views", __dirname + "/views" + "/");

app.use(routes);
app.use(api);
//get route from public directory
app.use(express.static(path.join(__dirname, "public")));
//access files inside src
// app.use(express.static(__dirname + "/src"));

var server = https.createServer(app).listen(app.get("port"), function() {
  console.log("Note Taking Express");
  console.log("Express Server listening on port " + app.get("port"));
});


