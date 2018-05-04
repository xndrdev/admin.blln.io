const { init, authenticate } = require('./functions');
const { sequelize, Shop, Administrator } = require('./main');

module.exports = {
  sequelize,
  init,
  authenticate,
  // initialized models
  Shop,
  Administrator
};
