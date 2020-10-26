const dotenv = require('dotenv').config();
var request = require('request');

//  https://infura.io/docs/ethereum/json-rpc/eth-getBlockByNumber?&utm_source=infurablog&utm_medium=referral&utm_campaign=tutorials&utm_content=getting_started_eth_api
// look at docs to see requires headers for eth_getBlockByNumber

var headers = { 
    'Content-Type': 'application/json'
}