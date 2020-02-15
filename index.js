const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

var server = http.createServer();
server.on('request', doRecquest);

var fs = require('fs');

function doRecquest(req,res){
    fs.readFile('./index.html', 'utf-8', doReard);

    function doReard(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end();
    }
}

server.listen(port, hostname, ()=>{
    console.log('Server running at http://${hostname} : ${port}/');
});

app.get('/', (req,res) => res.send("hello world"));

app.get('/api/v1/ppap', (req,res) => {
    const ppap = [
        {object: 'pen', order:1 },
        {object: 'pinapple', order:2 },
        {object: 'apple', order:3 },
        {object: 'pen', order: 4}
    ];
    res.json(ppap);
})



app.listen(3000, () => console.log('Listening on port 3000'));

