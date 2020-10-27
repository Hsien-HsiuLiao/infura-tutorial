//websocket example
//if you need your data on a more rolling basis, you’ll then want to use a WebSocket connection
//WebSockets are bidirectional and stateful, which means the connection between the client and 
//the server is kept alive until it is terminated by either party (client or server). 
//Once the connection is closed, it is terminated. The best time to use a WebSocket is 
//when you want to continuously push/transmit data to the already-open connection, 
//for example in cryptocurrency trading platforms, gaming applications, or chat applications, 
//where you want the data to be updated constantly in real time.

//In this example, we’ll write a Node.js program that again uses the Rinkeby endpoints and 
//uses a WebSocket connection to get the latest block header information using a 
//newHeads subscription type over that WebSocket connection. For this one, we want to see 
//an output of a tailing log of the latest block header data from the WebSocket connection. 

//hide ProjectID and Secret and connect to WebSocket
const dotenv = require('dotenv').config();
const WebSocket = require('ws');

//open up WebSocket connection by creating new instance of WebSocket
const ws = new WebSocket(`wss://ropsten.infura.io/ws/v3/${process.env.PROJECT_ID}`);

//open WebSocket and send data once it's open
//subscribing to get newest header
ws.on('open', function open() {
    ws.send('{"jsonrpc":"2.0", "method":"eth_subscribe", "params":["newHeads"], "id":1}');
});

//Now we want to be able to look at the data we’re receiving in the response, so we will 
//assign a variable to the parsed JSON data and will console.log it to get the header data 
//we were asked for:
ws.on('message', function incoming(data) {
    var obj = JSON.parse(data);
    console.log(obj);
    ws.close()
})