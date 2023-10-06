const chai = require("chai");
const chaiHttp = require("chai-http");
const { setResponse } = require("../utilities/gettersSetters.js");
const { CLOSING } = require("ws");
chai.use(chaiHttp);
require("dotenv").config();

let baseUrl = "https://api.restful-api.dev";

const body = {
  "name": "Apple Macbook Pro",
  "data": {
    "year": 2019,
    "price": 2049.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
 }
};
const object ={
  "name": "Apple Macbook Pro",
  "data": {
    "year": 2019,
    "price": 2049.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
    "color": "silver"
 }
}

async function apiGETRequest(endpoint) {
  await chai
    .request("https://api.restful-api.dev")
    .get(endpoint)
    .then((res) => {
      setResponse(res);
    });
}


async function apiPOSTRequest(endpoint) {
  await chai
    .request(baseUrl)
    .post(endpoint)
    .send(body)
    .then((res) => {
      setResponse(res);
    });
}


async function apiPUTRequest(endpoint) {
  await chai
    .request(baseUrl)
    .put(endpoint)
    .send(object)
    .then((res) => {
      setResponse(res);
      console.log(res.text);
    });
}

async function apiDELETERequest(endpoint) {
  await chai
    .request(baseUrl)
    .get(endpoint)
    .then((res) => {
      setResponse(res);
      console.log(res.text);
    });
}

module.exports = {
  apiGETRequest,
  apiPOSTRequest,
  apiPUTRequest,
  apiDELETERequest,
};