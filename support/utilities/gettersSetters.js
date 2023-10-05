function getResponse() {
  return this.response;
}
function setResponse(res) {
  this.response = res;
}

module.exports = {
  getResponse,
  setResponse
}