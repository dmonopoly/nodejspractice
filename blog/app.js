var http = require('http');
var url = require('url');
var fs = require('fs'); // file system

var newPostFormHTML = fs.readFileSync('views/posts/new.html'); // read in a file and cache it

function renderNewPostForm(request, response) {
	response.writeHead(200, {
		'Content-type': 'text/html; charset=utf-8'
	});

	response.write(newPostFormHTML); 
	// signal that we are done writing the response contents
	response.end("Let's explore!");
}

function render404(request, response) {
	response.writeHead(404);
	response.end('404 File not found');
}

var server = http.createServer(function(request, response) { // callback function. called by server whenever new request comes in.
	// regexp to capture a route
	var newPostFormRegex = new RegExp('^/posts/new/?$');
	var pathname = url.parse(request.url).pathname;
	if (newPostFormRegex.test(pathname)) {
		renderNewPostForm(request, response);
	} else {
		render404(request, response);
	}

});

server.listen(8000); // second parameter is host name, like localhost

console.log("Listening on http://127.0.0.1:8000");