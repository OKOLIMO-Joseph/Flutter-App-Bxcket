var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><p>This is the Home Page</p></body></html>')
        console.log('In the Server!');
        res.end();
    }
    else if (req.url == '/student'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><p>This is the Student Page</p></body></html>')
        res.end();
    }
    else if (req.url == '/admin'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><p>This is the Admin Page</p></body></html>')
        res.end();
    }
    else
        res.end('Invalid Request');
});

server.listen(5000);
console.log('Node js server at port 5000 is running');