const request = require("../../support/api/request_builder.js");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { getResponse, setResponse } = require("../../support/utilities/gettersSetters.js");
const expect = chai.expect;
chai.use(chaiHttp);

step("Verify GET Request to <endpoint>", async (endpoint) => {
  await request.apiGETRequest(endpoint);
});

step("Verify Response Code is <code>", async (code) => {
  let obj = JSON.parse(getResponse().text)
  expect(getResponse()).to.have.status(code);
});

step(
  "Verify Response contains key <key> and value <value>",
  async (key, value) => {
    let obj = JSON.parse(getResponse().text)
    expect(obj).to.have.property(key);
    expect(obj[key]).to.be.eq(value)
  }
);

step("Verify Post Request to <endpoint>", async (endpoint) => {
  await request.apiPOSTRequest(endpoint);
  console.log("Response: ", getResponse().text)
});

step(
  "Verify Response contains key <key>",
  async (key) => {
    let obj = JSON.parse(getResponse().text)
    expect(obj).to.have.property(key);
  }
);

step("Verify PUT Request to <endpoint>", async (endpoint) => {
  await request.apiPOSTRequest(endpoint)
  responseID = JSON.parse(getResponse().text)
  console.log("Response ID:", responseID)
  await request.apiPUTRequest(`${endpoint}/${responseID['id']}`);
  putResponse = JSON.parse(getResponse().text)
  console.log("PUT Response:", putResponse)
});

step(
  "Verify Data object contains key <key> and value <value>",
  async (key, value) => {
    let obj = JSON.parse(getResponse().text)
    expect(obj.data).to.have.property(key);
    expect(obj.data[key]).to.be.eq(value)
  }
);

step("Verify Post & Delete Request to <endpoint>", async (endpoint) => {
  await request.apiPOSTRequest(endpoint);
  console.log("Response: ", getResponse().text)
});

step("Verify DELETE Request to <endpoint>", async (endpoint) => {
  await request.apiPOSTRequest(endpoint)
  responseID = JSON.parse(getResponse().text)
  console.log("Response ID:", responseID)
  await request.apiDELETERequest(`${endpoint}/${responseID['id']}`);
  deleteResponse = JSON.parse(getResponse().text)
  console.log("DELETE Response:", deleteResponse)
});