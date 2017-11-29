//index for restful api
const express = require ('express')
const app = express()
var mysql = require('mysql');
var dc = require('dc');
var d3 = require('d3');
var jsonToCSV = require('json-to-csv');
var connection = mysql.createConnection ({
	host	: 'localhost',
	user	: 'root',
	password :	'',
	 database: 'datosJaveriana'
});


app.get('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	connection.connect;
var arreglo = [];
connection.query('SELECT * from estudiantescarreras', function(err, rows, fields) {
  if (err) throw err;
  	for ( var i = 0; i < rows.length; i++)
  		{
  			arreglo.push(rows[i]);
  		}
 	
 	//console.log(arreglo);
  	var fs = require('fs');
  	var myJsonString = JSON.stringify(arreglo);
  	console.log(myJsonString);
  	//console.log(JSON.parse(myJsonString));
  	//var json2csv = require('json2csv'); 
  	//var fileName = "algo.csv";
	res.status(200).send(myJsonString);
  	res.end(myJsonString);


});});
//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example'))