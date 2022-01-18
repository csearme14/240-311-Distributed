
//fs = require("fs");
//data = fs.readFileSync('text.txt');
//console.log(data.toString()); //อ่านข้อมูลก่อน
//console.log("Finished");

//fs = require("fs");
//fs.readFile('text.txt',  (err, data) => {
//   if (err)
//       return console.error(err);
//   console.log(data.toString());
//});
//console.log("Finished"); //ข้ามมาทำส่วนนี้ก่อนแล้ว callback กลับ

//console.log('a: ')
//let stdin = process.openStdin()
//stdin.addListener("data",  (a) => {
    //console.log(a.toString().trim())
//   console.log('b: ')
//   stdin.addListener("data", (b) => {
//       console.log(a*b)
//       stdin.destroy()
//   })
//})

//let stdin = process.openStdin()
//let a = 1;

//const main = () => {
//   console.log('a: ')
//   stdin.addListener("data", getA)
//}

//const getA = (num) => {
//   a = num.toString().trim()
//   console.log('a = ' + a)
//   console.log('b: ')
//   stdin.addListener("data", getB )
//}

//const getB =  (b) => {
//   console.log('a = ' + a.toString().trim())
//   console.log('b = ' + b.toString().trim())
//   console.log('a*b =  ' + a*b)
//   stdin.destroy()
//}

//main()

//console.log('a: ')
//let stdin = process.openStdin()
//let a, b, i=1
//stdin.addListener("data",  (num) => {
   // console.log(High.toString().trim())
//   console.log('b: ')
//   if ( i === 1)
//      a = num
//   else if ( i === 2 ){
//       b = num
//       console.log("a*b: " + a*b)
//       stdin.destroy()
//   }
//   i++
//})

//const EventEmitter = require('events');
//class MyEmitter extends EventEmitter {}
//const myEmitter = new MyEmitter();
//myEmitter.on('event', (a,b) => {
//   console.log(a,b, 'an event occurred!')
//});
//myEmitter.emit('event','a','b')


//var net = require('net');

//var HOST = '127.0.0.1';
//var PORT = 6969;
//net.createServer(function(sock) {
//   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
//   sock.on('data', function(data) {
//       console.log('DATA ' + sock.remoteAddress + ': ' + data);
//       sock.write('You said "' + data + '"');
//   });

//   sock.on('close', function(data) {
//       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
//   });
//}).listen(PORT, HOST);

//console.log('Server listening on ' + HOST +':'+ PORT);