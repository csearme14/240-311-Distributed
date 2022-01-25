const net = require("net")
const HOST = "127.0.0.1";
const PORT = 12345

const client = new net.Socket();

client.connect(PORT, HOST, function () {
    console.log('Connected!');
    client.write(20 +"");
} )

client.on("data", (data) => {
    console.log(data +"");
    // client.write("Thank!");
    client.destroy();
});

client.on("error", () => console.log("error"))