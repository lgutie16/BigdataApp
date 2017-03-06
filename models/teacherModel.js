"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Teachers = sequelize.define("Teachers", {
    name: DataTypes.STRING,
    cc: DataTypes.INTEGER,
    degree:DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            Teachers.hasMany(models.SchoolClass);
        },
        getById: function(id) {
            return Teachers.findById(id);
        },
        createRecord: function(teacher){            
            return Teachers.build(teacher).save();
        },
        updateRecord:function(teacher){
             return Teachers.update(teacher,{
                  where:{
                    uuid:Teachers.uuid
                  }
              });
        },
        listRecords:function(){
            return Teachers.findAll();
        }
    },
    instanceMethods:{
       
    }
});

return Teachers;
};