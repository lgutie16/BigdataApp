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
        getById: function(id) {
            return Document.findById(id);
        },
        createRecord: function(schoolclass){
            return Document.build(schoolclass);
        },
        updateRecord:function(schoolclass){
            return Document.update(schoolclass,{
              where:{
                uuid:Document.uuid
              }
            });
        },
        listRecords:function(cb){
            setTimeout(function () { // simulated I/O
                cb(null, Document.findAll({
                  include: [
                    {model: sequelize.model('Students')}
                  ]
                }));
            }, 100);
            
        }
    }
    

});

return Document;
};