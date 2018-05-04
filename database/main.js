const Sequelize = require('sequelize');

const { administrator, shop } = require('../models');

const {
  DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, USE_SSL
} = process.env;

const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: USE_SSL
  }
});

const Shop = shop(sequelize);
const Administrator = administrator(sequelize);

module.exports = {
  sequelize,
  Administrator,
  Shop
};
