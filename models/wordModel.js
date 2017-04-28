"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {

var Lgutie16 = sequelize.define("Lgutie16", {
    word: DataTypes.STRING,
    doc: DataTypes.STRING,
    count: DataTypes.INTEGER,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        getById: function(id) {
            return Lgutie16.findById(id);
        },
        createRecord: function(record){
            return Lgutie16.build(record).save()
        },
        updateRecord:function(record){
             return Lgutie16.update(record,{
              where:{
                uuid: record.uuid
              }
            });
        },
        listRecords:function(record){  
            return Lgutie16.findAll({
              where: { word: record.name}
            });        
        },
        listTotalRecords:function(){  
            return Lgutie16.findAll();        
        },
        deleteRecord: function(record){
            return Lgutie16.destroy({
              where:{
                uuid: record.uuid
              }
            })
        }
    }
});

return Lgutie16;
};