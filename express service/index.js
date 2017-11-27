//index for restful api
const express = require ('express')
const app = express()
var mysql = require('mysql');
var connection = mysql.createConnection ({
	host	: 'localhost',
	user	: 'root',
	password :	''
});
connection.connect;

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example'))