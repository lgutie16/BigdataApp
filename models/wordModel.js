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
        createRecord: function(word){
            var classId = student.name   
            console.log(classId)        
            return Word.build(student).save().then(function(savedstudent){
                savedstudent.addSchoolClass(classId)
            });
        },
        updateRecord:function(word){
             return Word.update(student,{
              where:{
                uuid: word.uuid
              }
            });
        },
        listRecords:function(word){  
            Word.findAll({
              where: { name: word.name},
              include: [
                {model: sequelize.model('Document')}
              ]
            });        
        },
        deleteRecord: function(word){
            return Word.destroy({
                  where:{
                    uuid: word.uuid
                  }
            })
        }
    }
});

return Word;
};