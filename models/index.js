var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var lodash    = require('lodash');
var config    = require(__dirname + '/../config/database.json')[process.env.NODE_ENV];
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);
var db        = {};


/*
fs
  .readdirSync(__dirname) //scan all the files in the given folder (__direname = currently folder)
  .filter(function(file) { // this filter takes all the js files (all the models)
    return ((file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) == '.js'));
  })
  .forEach(function(file) { // takes evey file and create a model from each one and instet into db array
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) { // check if the model have asociations with others models
  if (db[modelName].hasOwnProperty('associate')) {
    db[modelName].associate(db);
  }
});
//finally export the models 
module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
*/
 if (process.env.HEROKU_POSTGRESQL_CHARCOAL_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_CHARCOAL_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('telematicadv', 'root', 'root')
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Students:         sequelize.import(__dirname + '/studentModel'), 
    Teachers:         sequelize.import(__dirname + '/teacherModel'),
    Course:           sequelize.import(__dirname + '/courseModel'),
    SchoolClass:      sequelize.import(__dirname + '/classModel')
  }


module.exports = global.db
