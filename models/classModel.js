"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var SchoolClass = sequelize.define("SchoolClass", {
    code: DataTypes.STRING,
    description:DataTypes.TEXT,
    start:DataTypes.DATE,
    end:DataTypes.DATE,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            SchoolClass.hasMany(models.Students);
        },
        getById: function(id) {
            return SchoolClass.findById(id);
        },
        createRecord: function(schoolclass){
            
            return SchoolClass.build(schoolclass).save();
        },
        updateRecord:function(schoolclass){
             return SchoolClass.update(schoolclass,{
                  where:{
                    uuid:SchoolClass.uuid
                  }
                });
        },
        listRecords:function(){
            return SchoolClass.findAll();
        }
    },
    instanceMethods:{
        available:function(newstart,newend){           
        },
    }


});

return SchoolClass;
};