
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

app.get('/api/getPosts', (req, res, next) => {

    connection.query(
        "SELECT * FROM Post", function(error, results, fields) {
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

app.get('/api/addPost',(req,res)=>{
    const {Post_ID, Group_ID, Employee_ID, Department_ID, Branch_ID, PostalCode, Tag, Date, PostText}=req.query;
    const Insert_Post="INSERT INTO Post (Post_ID, Group_ID, Employee_ID, Department_ID, Branch_ID, PostalCode,Tag,Date,PostText) VALUES ('"+Post_ID+"','"+ Group_ID+"','"+ Employee_ID+"','"+ Department_ID+"','"+ Branch_ID+"','"+PostalCode+"','"+Tag+"','"+Date+"','"+PostText+"')";
    connection.query(Insert_Post, (err, results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send('successfully added post')
        }
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));