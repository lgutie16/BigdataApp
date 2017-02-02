"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Students = sequelize.define("Students", {
    name: DataTypes.STRING,
    docNumber: DataTypes.INTEGER,
    phone:DataTypes.STRING,
    email: DataTypes.STRING,
    agent: DataTypes.STRING,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            Students.belongsToMany(models.SchoolClass, {through: 'StudentClasses'});
        },
        getById: function(id) {
            return Students.findById(id);
        },
        createRecord: function(student){
            
            return Students.build(student).save();
        },
        updateRecord:function(student){
             return Students.update(student,{
              where:{
                uuid:Students.uuid
              }
            });
        },
        listRecords:function(){
            return Students.findAll();
        }
    },
    instanceMethods:{
       addClass: function(){
            Students.addClass(course, { SchoolClassId: { : '1' }})
       }
    }


});

return Students;
};