var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><p>Welcome to the Student API</p></body></html>')
        console.log('In the Server!');
        res.end();
    }
    else if (req.url == '/users'){
        res.writeHead(200, {'Content-Type': 'text/json'})
        res.write('{"name":1,"access_number":6,"course":10,"gender":5,"data":[{"id":1,"name":"OKOLIMO JOSEPH","access_number":"B22562","course":"BSIT","gender":"Male"},{"id":2,"name":"WHITNEY NINSIIMA","access_number":"B24563","course":"BSIT","gender":"Female"},{"id":3,"name":"AKELLO RIZPAH","access_number":"B5647","course":"BOTHAM","gender":"Female"}]}')
        res.end();
    }
    else
        res.end('Invalid Request');
});

server.listen(2000);
console.log('Node js server at port 2000 is running');