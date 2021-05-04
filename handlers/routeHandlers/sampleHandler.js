// const handler = {};

// handler.sampleHandler = (requestProparties, callback) => {
//   callback(200, {
//     message: "This is a sample url",
//   });
// };

// module.exports = handler;

const handler = {};

handler.sampleHandler = (requestProparties, callback) => {
  console.log(requestProparties);
  callback(200, {
    message: "This is a sample Url",
  });
};

module.exports = handler;
