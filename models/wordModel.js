"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Word = sequelize.define("Word", {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            Word.belongsToMany(models.Document, {onDelete: 'cascade', through: 'W_D'});
        },
        getById: function(id) {
            return Word.findById(id);
        },
        createRecord: function(student){
            var classId = student.name   
            console.log(classId)        
            return Word.build(student).save().then(function(savedstudent){
                savedstudent.addSchoolClass(classId)
            });
        },
        updateRecord:function(student){
             return Word.update(student,{
              where:{
                uuid:Word.uuid
              }
            });
        },
        listRecords:function(cb){  
           setTimeout(function () { // simulated I/O
                cb(null, Word.findAll({
                  include: [
                    {model: sequelize.model('SchoolClass')}
                  ]
                }));
            }, 100);        
        }
    }
});

return Word;
};