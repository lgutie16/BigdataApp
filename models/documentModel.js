"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Document = sequelize.define("Document", {
    code: DataTypes.STRING,
    name:DataTypes.TEXT,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            Document.belongsToMany(models.Word, {onDelete: 'cascade', through: 'W_D'});
        },
        getById: function(doc) {
            return Document.findById(doc.id);
        },
        createRecord: function(doc){
            var WordId = doc.wordId      
            return Document.build(doc).save().then(function(saveddoc){
                saveddoc.addWord(WordId)
            });
        },
        updateRecord:function(doc){
            return Document.update(schoolclass,{
              where:{
                uuid:doc.uuid
              }
            });
        },
        listRecords:function(doc){
           return Document.findAll({
              where: { name: doc.name},
              include: [
                {model: sequelize.model('Word')}
              ]
            });            
        },
        deleteRecord: function(doc){
            return Document.destroy({
                  where:{
                    uuid: doc.uuid
                  }
            })
        }
    }
    

});

return Document;
};