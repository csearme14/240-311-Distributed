const net = require("net")
const HOST = "0.0.0.0"
const PORT = 12345 
let sum = 0;
net
    .createServer( (sock) => {
        console.log(`${sock.remoteAddress}  ${sock.remotePort} `);
        // sock.write("Hi!!")

        sock.on("data", (data) => {
            sum += +data;
            console.log("Get data: " + sum) 
            sock.write(sum + "");
        })
        sock.on("close", () => console.log("Close connection"))
        sock.on("error", (err) => console.log("Error occu"))