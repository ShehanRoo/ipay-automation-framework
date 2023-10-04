const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

let response = ""
const baseURL = "https://api.restful-api.dev";
step("Verify GET Request to <url>", async (url) => {
  await chai.request(baseURL).get(url).then(res =>{
    response = res;
  });
  console.log("Response: ", response.text);
});

step("Verify Response Code is <code>", async (code) => {
  expect(response).to.have.status(code);
});
