const chai = require("chai");
const chaiHttp = require("chai-http");
const { setResponse } = require("../utilities/gettersSetters.js");
chai.use(chaiHttp);
require("dotenv").config();

async function apiGETRequest(endpoint) {
  await chai
    .request("https://api.restful-api.dev")
    .get(endpoint)
    .then((res) => {
      setResponse(res);
    });
}

async function apiPOSTRequest(baseUrl, endpoint) {
  await chai
    .request(baseUrl)
    .get(endpoint)
    .then((res) => {
      setResponse(res);
      console.log(res.text);
    });
}

async function apiPUTRequest(baseUrl, endpoint) {
  await chai
    .request(baseUrl)
    .get(endpoint)
    .then((res) => {
      setResponse(res);
      console.log(res.text);
    });
}

async function apiDELETERequest(baseUrl, endpoint) {
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
