"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Groups = sequelize.define("Groups", {
    name: DataTypes.STRING,
    description:DataTypes.TEXT,    
    members: DataTypes.TEXT,
    password: DataTypes.STRING,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        associate: function(models) {
            Groups.hasMany(models.Ideas);
        },
        getById: function(id) {
            return Groups.findById(id);
        },
        createRecord: function(group){            
            return Groups.build(group).save();
        },
        updateRecord:function(group){
            return Groups.update(group,{
                  where:{
                    uuid:group.uuid
                  }
            });
        },
        listRecords:function(){
            return Groups.findAll();
        }
    },
    instanceMethods:{
        available:function(nuevaFechaInicio,nuevaFechaFin){           
        },
    }


});

return Groups;
};