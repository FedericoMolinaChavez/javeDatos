//index for restful api
const express = require ('express')
const app = express()
var mysql = require('mysql');
var dc = require('dc');
var d3 = require('d3');
var connection = mysql.createConnection ({
	host	: 'localhost',
	user	: 'root',
	password :	'',
	 database: 'datosJaveriana'
});
connection.connect;
  var arreglo = [];
connection.query('SELECT * from estudiantescarreras', function(err, rows, fields) {
  if (err) throw err;

  for (var i = 0; i <rows.length ; i++)
  	{
  		arreglo.push(rows[i]);
  	}
  	var fs = require('fs');
  	var myJsonString = JSON.stringify(arreglo);
  	fs.writeFile('data.json', myJsonString, function(err) {
  	if (err) throw err;
});
});
connection.end();
//delay(1000);
console.log(arreglo);
 d3.values = arreglo;
 console.log(d3.values);
//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example'))