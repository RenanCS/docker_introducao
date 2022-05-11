const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: 'mysql-container',
  user: 'root',
  password: 'renanteste',
  database: 'RENANMYSQLDOCKER'
});

connection.connect();

app.get('/products', (req, res) =>{
    connection.query('SELECT * FROM products', (error, results) => {
      if(error){
        throw error
      };

      res.send(results.map(item => ({name: item.name, price: item.price})));
    });
});


app.get('/teste', (req, res) =>{
    res.send("Api ok");
});

app.listen(9001,() => console.log('Listening on port 9001'));
