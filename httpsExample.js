//https example
// In this example, we’ll write a Node.js program that uses the Rinkeby endpoints and sends an RPC request 
//to Infura to get the latest block data using eth_getBlockByNumber. From there, we will convert that 
//block number from hex to integer and print the integer block number to the terminal.

//This method is great if you’re looking for more historical data or are just needing the data once

const dotenv = require('dotenv').config();
var request = require('request');

//  https://infura.io/docs/ethereum/json-rpc/eth-getBlockByNumber?&utm_source=infurablog&utm_medium=referral&utm_campaign=tutorials&utm_content=getting_started_eth_api
// look at docs to see requires headers for eth_getBlockByNumber

var headers = { 
    'Content-Type': 'application/json'
}

// identify what data we want to send through to the server, look ar example from docs using CURL
var dataString = '{"jsonrpc":"2.0", "method":"eth_getBlockByNumber","params":["latest", true], "id":1}';

// where to get data from?
var options = {
    url: `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`,
    method: 'POST',
    headers: headers,
    body: dataString,
    // auth : {
        // 'user': '',
        // 'pass': `${process.env.PROJECT_SECRET}`
//    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200 ) {
        json = response.body;
        var obj = JSON.parse(json);
        console.log(obj);
        hex = obj.result.number;
        final = parseInt( hex, 16);
        console.log("hex to integer: ",final);
    }
}

request(options, callback);
