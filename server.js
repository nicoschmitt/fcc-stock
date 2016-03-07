require('dotenv').config({silent: true});

var http = require('http');
var path = require('path');

var mongoose = require("mongoose");
var driver = process.env.MONGO_URI;
mongoose.connect(driver);

var express = require('express');
var sassMiddleware = require('node-sass-middleware');

var bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "client/css"),
    prefix: "/css",
    outputStyle: 'compressed',
    debug: false
}));

require('./server/routes').register(app);
require("./server/api/socket").register(io);

app.use(express.static(path.resolve(__dirname, 'client')));

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
