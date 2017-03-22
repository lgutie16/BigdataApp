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
            SchoolClass.belongsToMany(models.Students, {onDelete: 'cascade', through: 'StudentClasses',  foreignKey: 'studentId'});
        },
        getById: function(id) {
            return SchoolClass.findById(id);
        },
        createRecord: function(schoolclass){
            return SchoolClass.build(schoolclass);
        },
        updateRecord:function(schoolclass){
                return SchoolClass.update(schoolclass,{
                  where:{
                    uuid:SchoolClass.uuid
                  }
                });
        },
        listRecords:function(cb){
             setTimeout(function () { // simulated I/O
                cb(null, SchoolClass.findAll({
                  include: [
                    {model: sequelize.model('Students') }
                  ]
                }));
            }, 100);
            
        }
    },
    instanceMethods:{
        available:function(newstart,newend){           
        },
    }


});

return SchoolClass;
};