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
            Students.belongsToMany(models.SchoolClass, {onDelete: 'cascade', through: 'StudentClasses', foreignKey: 'classId'});
        },
        getById: function(id) {
            return Students.findById(id);
        },
        createRecord: function(student){    

            var classId = student.name   
            console.log(classId)        
            return Students.build(student).save().then(function(savedstudent){
                savedstudent.addSchoolClass(classId)
            });
        },
        updateRecord:function(student){
             return Students.update(student,{
              where:{
                uuid:Students.uuid
              }
            });
        },
        listRecords:function(cb){  
           setTimeout(function () { // simulated I/O
                cb(null, Students.findAll({
                  include: [
                    {model: sequelize.model('SchoolClass')}
                  ]
                }));
            }, 100);        
        }
    },
    instanceMethods:{
       addClass: function(course){
            return Students.addClass(course, { SchoolClassId: { id: '1' }})
       }
    }


});

return Students;
};