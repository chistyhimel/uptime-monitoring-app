// const environments = {};

// environments.staging = {
//   port: 3000,
//   envName: "staging",
// };

// environments.production = {
//   port: 5000,
//   envName: "production",
// };

// const currentEnvironment =
//   typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// const environmentToExport =
//   typeof environments[currentEnvironment] === "object"
//     ? environments[currentEnvironment]
//     : environments.staging;

// module.exports = environmentToExport;

const environment = {};

environment.staging = {
  envName: "staging",
  port: 3000,
};

environment.production = {
  envName: "production",
  port: 5000,
};

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const environmentToExport =
  typeof environment[currentEnvironment] === "object"
    ? environment[currentEnvironment]
    : environment.staging;

module.exports = environmentToExport;
