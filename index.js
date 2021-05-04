const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");
app = {};

// data.create("test", "newFile", { name: "Himel", work: "Programmig" }, (err) => {
//   console.log(err);
// });
// data.read("test", "newFile", (err, data) => {
//   console.log(err, data);
// });

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Listening environment is ${environment.envName}`);
    console.log(`Listening to port ${environment.port}`);
  });
};

app.handleReqRes = handleReqRes;

app.createServer();
