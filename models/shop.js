const { STRING, DATE } = require('sequelize');

function shop(sequelize) {
  return sequelize.define('shop', {
    url: {
      type: STRING,
      field: 'url'
    },
    name: {
      type: STRING,
      field: 'name'
    },
    createdAt: {
      type: DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DATE,
      field: 'updated_at'
    }
  });
}

module.exports = shop;
