const crypto = require("crypto");

const utilities = {};

utilities.parseJSON = (jsonString) => {
  let output;
  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }

  return output;
};

utilities.hashing = (str) => {};

module.exports = utilities;
