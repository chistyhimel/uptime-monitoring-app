const data = require("./../../lib/data");

const handler = {};

handler.userHandler = (requestProparties, callback) => {
  const acceptedMothods = ["get", "post", "put", "delete"];
  if (acceptedMothods.indexOf(requestProparties.method) > -1) {
    handler._users[requestProparties.method](requestProparties, callback);
  } else {
    callback(405);
  }
};

handler._users = {};

handler._users.post = (requestProparties, callback) => {
  const firstName =
    typeof requestProparties.body.firstName === "string" &&
    requestProparties.body.firstName.trim().length > 0
      ? requestProparties.body.firstName
      : false;

  const lastName =
    typeof requestProparties.body.lastName === "string" &&
    requestProparties.body.lastName.trim().length > 0
      ? requestProparties.body.lastName
      : false;

  const phone =
    typeof requestProparties.body.phone === "string" &&
    requestProparties.body.phone.trim().length === 11
      ? requestProparties.body.phone
      : false;

  const password =
    typeof requestProparties.body.password === "string" &&
    requestProparties.body.password.trim().length > 0
      ? requestProparties.body.password
      : false;

  const tosAgreement =
    typeof requestProparties.body.tosAgreement === "boolean" &&
    requestProparties.body.tosAgreement.trim().length > 0
      ? requestProparties.body.tosAgreement
      : false;

  if (firstName && lastName && phone && password && tosAgreement) {
    data.read("users", phone, (err, user) => {
      if (err) {
        let userObject = {
          firstName,
          lastName,
          phone,
        };
      } else {
        callback(500, {
          error: "There was a problem in server side.",
        });
      }
    });
  } else {
    callback(400, {
      error: "You have a problem in your request.",
    });
  }
};
handler._users.get = (requestProparties, callback) => {
  callback(200);
};
handler._users.put = (requestProparties, callback) => {};
handler._users.delete = (requestProparties, callback) => {};

module.exports = handler;
