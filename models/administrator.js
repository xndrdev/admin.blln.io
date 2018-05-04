const { STRING, DATE } = require('sequelize');

function administrator(sequelize) {
  return sequelize.define('administrator', {
    username: STRING,
    email: STRING,
    password: STRING,
    createdAt: DATE,
    updatedAt: DATE
  });
}

module.exports = administrator;
