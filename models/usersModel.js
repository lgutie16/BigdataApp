"use strict";

var models  = require(__dirname);

module.exports = function(sequelize, DataTypes) {
var Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    docType:DataTypes.STRING,    
    docNumber: DataTypes.INTEGER,
    cellphone: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    position: DataTypes.STRING,
    entity: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
}, {
    classMethods: {
        getById: function(id) {
            return Users.findById(id);
        },
        createRecord: function(user){
            
            return Users.build(user).save();
        },
        updateRecord:function(user){
             return Users.update(user,{
                  where:{
                    uuid:user.uuid
                  }
                });
        },
        listRecords:function(){
            return Users.findAll();
        }
    },
    instanceMethods:{
        available:function(nuevaFechaInicio,nuevaFechaFin){           
        },
    }


});

return Users;
};