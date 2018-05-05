const express = require('express');
const passport = require('passport');
const dotenv = require('dotenv').config();
const LocalStrategy = require('passport-local').Strategy;
const { logger } = require('./util');
const {
  sequelize, init, authenticate, Administrator, Shop
} = require('./database');

const app = express();

async function main() {
  if (dotenv.error) {
    throw new Error('Environment variables note set!');
  }

  await authenticate(sequelize);
  await init(sequelize);

  // authentication
  passport.use(new LocalStrategy((username, password, done) => {
    // TODO: implement
    done();
  }));

  // routing
  app.get('/api/shops', (req, res) =>
    Shop.findAll().then((shops) => {
      res.send(shops);
    }));

  app.get('/api/administrators', (req, res) =>
    Administrator.findAll().then((administrators) => {
      res.send(administrators);
    }));

  // listen start
  app.listen(3000, () => {
    logger.log('Server running on port 3000');
  });
}

main();
