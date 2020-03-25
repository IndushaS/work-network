
const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection= mysql.createConnection({
    host:'34.67.199.161',
    user:'group1',
    password:'indusha123',
    database:'workDB',

});
connection.connect(function(error){
    if(error){
        console.log(error);
    } else{
        console.log('Connected');
    }
});

app.get('/api/hello', (req, res, next) => {

    connection.query(
        "SELECT * FROM Employee", function(error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
      );
  
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));