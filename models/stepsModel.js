    "use strict";

var models  = require(__dirname);



module.exports = function(sequelize, DataTypes) {
var Step = sequelize.define("Step", {
    name: DataTypes.STRING,
    description:DataTypes.STRING,
    start:DataTypes.DATE,
    end:DataTypes.DATE,    
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}


}, {
    classMethods: {

        associate: function(models) {
         

        },
        getById: function(id) {
            return Step.findById(id);
        },
        crear: function(Step){
            
            return Step.build(Step).save();
        },
        actualizar:function(Step){
             return Step.update(Step,{
                  where:{
                    uuid:Step.uuid
                  }
                });
        }



    },
    instanceMethods:{
        estaDisponible:function(nuevaFechaInicio,nuevaFechaFin){
           
        },
    }


});

return Step;
};