const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const url = require('url');

app.use("/", express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get("/test", (req, res) => {
    let _url = req.url;
    res.sendFile(__dirname + "/test.html");
})

io.on('connection', function(socket){
    console.log("user connected");
})

http.listen(80, () => {
    console.log(`listening on *:80`);
})
