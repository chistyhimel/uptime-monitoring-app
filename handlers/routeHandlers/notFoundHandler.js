const handler = {};

handler.notFoundHandler = (requestProparties, callback) => {
  callback(404, {
    message: "You requested url is not found.",
  });
};

module.exports = handler;
