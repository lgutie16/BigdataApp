   "use strict";

var models  = require(__dirname);



module.exports = function(sequelize, DataTypes) {
var Contest = sequelize.define("Contest", {
    name: DataTypes.STRING,
    directedTo: DataTypes.TEXT,
    description:DataTypes.TEXT,
    start:DataTypes.DATE,
    end:DataTypes.DATE,
    startInscription: DataTypes.DATE,
    endInscriptions: DataTypes.DATE,
    awards: DataTypes.TEXT,
    inCharge: DataTypes.STRING,
    uuid : {type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4}


}, {
    classMethods: {
        associate: function(models) {
            Contest.hasMany(models.Step);

        },
        getById: function(id) {
            return Contest.findById(id);
        },
        createRecord: function(contest){
            
            return Contest.build(contest).save();
        },
        updateRecord:function(contest){
             return Contest.update(contest,{
                  where:{
                    uuid:Contest.uuid
                  }
                });
        },
        listRecords:function(){
            return Contest.findAll();
        }



    },
    instanceMethods:{
        available:function(nuevaFechaInicio,nuevaFechaFin){           
        },
    }


});

return Contest;
};