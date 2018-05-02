const express = require('express'),
    app = express(),
    Sequelize = require('sequelize')
    dotenv = require('dotenv').config(),
    bcrypt = require('bcrypt'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

//environment variables
if(dotenv.error){
    console.error(dotenv.error);
}

//DB Connection
sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

sequelize
  .authenticate()
  .then(() => {
      console.log('DB Connection established');
  })
  .catch(err => {
      console.error('Unable to connect: ', err);
  });

//Shop model
const Shop = sequelize.define('shop', {
    url: {
        type: Sequelize.STRING,
        field: 'url'
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
});

//Administrator model
const Administrator = sequelize.define('administrator', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

sequelize.sync()
    .then(() => {
        return bcrypt.hash(process.env.INITIAL_PASSWORD, 10);
    })
    .then(password => Administrator.create({
        username: 'alexander',
        emai: 'alexander@goltfisch.de',
        password,
        createdAt: new Date,
        updatedAt: new Date
    }));

//authentication
passport.use(new LocalStrategy(
    function(username, password, done) {

    }
));

//routing
app.get('/', (req, res) => {
  res.send('hI');
});

app.get('/shops', function(req, res) {
  console.log('list shops');

  Shop.findAll().then(shops => {
    console.log(shops);
    res.send(shops);
  })
});

app.get('/administrators', (req, res) => {
    console.log('list administrators');

    Administrator.findAll().then(administrators => {
        res.send(administrators);
    });
});

//listen start
app.listen(3000, function() {
    console.log('what up on 3000?');
});