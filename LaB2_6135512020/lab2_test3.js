//var net = require('net');
//var HOST = '127.0.0.1';
//var PORT = 6969;

//var client = new net.Socket();
//client.connect(PORT, HOST, function() {
//   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
//   client.write('I am Chuck Norris!');
//});

//client.on('data', function(data) {
//   console.log('DATA: ' + data);
//   client.destroy();
//});

// Add a 'close' event handler for the client socket
//client.on('close', function() {
//   console.log('Connection closed');
//});


var dgram = require('dgram');
var message = new Buffer.from("My message",'utf8');
var client = dgram.createSocket("udp4");
client.send(message, 0, message.length, 41234, "localhost",
   function(err, bytes) {
       client.close();
   }
);
