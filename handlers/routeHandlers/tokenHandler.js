const data = require("../../lib/data");
const { hash } = require("../../helpers/utilities");
const { parseJSON } = require("../../helpers/utilities");

const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
  const acceptedMothods = ["get", "post", "put", "delete"];

  if (acceptedMothods.indexOf(requestProperties.method) > -1) {
    handler._token[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._token = {};

handler._token.post = (requestProperties, callback) => {
  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.trim().length === 11
      ? requestProperties.body.phone
      : false;
};

handler._token.get = (requestProperties, callback) => {};

handler._token.put = (requestProperties, callback) => {};

handler._token.delete = (requestProperties, callback) => {};
