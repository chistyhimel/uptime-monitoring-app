const handler = {};

handler.sampleHandler = (requestProparties, callback) => {
  callback(200, {
    message: "This is a sample Url",
  });
};

module.exports = handler;
