const bcrypt = require('bcrypt');
const { logger } = require('../util');
const { administrator } = require('../models');

const { INITIAL_PASSWORD } = process.env;

async function authenticate(sequelize) {
  return sequelize
    .authenticate()
    .then(() => {
      logger.info('DB Connection established');
    })
    .catch((err) => {
      logger.error('Unable to connect: ', err);
    });
}

async function init(sequelize) {
  const Administrator = administrator(sequelize);
  return sequelize
    .sync()
    .then(() => bcrypt.hash(INITIAL_PASSWORD, 10))
    .then((password) =>
      Administrator.create({
        username: 'alexander',
        email: 'alexander@goltfisch.de',
        password,
        createdAt: new Date(),
        updatedAt: new Date()
      }));
}

module.exports = {
  authenticate,
  init
};
