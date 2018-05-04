/* eslint-disable no-console */

const prefix = new Date();

function info(message) {
  console.info(`${prefix} - INFO: ${message}`);
}

function error(message) {
  console.error(`${prefix} - ERROR: ${message}`);
}

function log(message) {
  console.log(`${prefix} - LOG: ${message}`);
}

module.exports = {
  info,
  error,
  log
};
