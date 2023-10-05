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
