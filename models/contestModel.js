    "use strict";

var models  = require(__dirname);



module.exports = function(sequelize, DataTypes) {
var Contest = sequelize.define("Contest", {
    name: DataTypes.STRING,
    description:DataTypes.STRING,
    start:DataTypes.DATE,
    end:DataTypes.DATE,    
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}


}, {
    classMethods: {

        associate: function(models) {
            Contest.hasMany(models.Step);

        },
        getById: function(id) {
            return Contest.findById(id);
        },
        crear: function(contest){
            
            return Contest.build(contest).save();
        },
        actualizar:function(contest){
             return Contest.update(contest,{
                  where:{
                    uuid:Contest.uuid
                  }
                });
        },
        listContests:function(){
            return Contest.findAll();
        }



    },
    instanceMethods:{
        estaDisponible:function(nuevaFechaInicio,nuevaFechaFin){
           
        },
    }


});

return Contest;
};