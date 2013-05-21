var portNum = 8000;

// 1
// load the http module to create an http server
var http = require("http");

// configure our http server to respond with Hello World to all requests
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("Hello World! How are you? <br>Learn to enjoy the world<br>&nbsp; &nbsp; &nbsp;even if you are briefly in it.\n");
}).listen(portNum); // listen on this port number

console.log('Server running at http://127.0.0.1:'+portNum+"/");

// 2
// var sys = require('sys');
// var net = require('net');
// net.createServer(function (socket) {
// 	socket.addListener('connect', function() {
// 		sys.puts("New connection from "+socket.remoteAddress);
// 		socket.end("sup\n");
// 	});
// }).listen(portNum);

// console.log("TCP server listening on port "+portNum+" at localhost.");