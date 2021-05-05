const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
  secretKey: "123456789",
};

environments.production = {
  port: 5000,
  envName: "production",
  secretKey: "123456789",
};

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

module.exports = environmentToExport;
